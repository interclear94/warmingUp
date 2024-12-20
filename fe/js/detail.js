const urlStr = window.location.href;
const url = new URL(urlStr);
const urlParams = url.searchParams;
const numIndex = urlParams.get("page");

const modalPopup = document.querySelector(".modal-popup");
const modalPopup2 = document.querySelector(".modal-popup2");

const deleteBtn = document.getElementById("deleteBtn");
const modifyBtn = document.getElementById("modifyBtn");
const modifyBtnConfirm = document.getElementById("modifyBtnConfirm");
const cancelBtn = document.querySelector("#cancelBtn");
const cancelBtn2 = document.querySelector("#cancelBtn2");
const confirmBtn = document.getElementById("confirmBtn");

const password = document.getElementById("userPw");
const password2 = document.getElementById("userPw2");

// 삭제 기능 팝업
deleteBtn.onclick = () => {
  // console.log("확인 하고 있어요");
  modalPopup.style.display = "block";
};

// 삭체 과정
confirmBtn.onclick = () => {
  // 비밀번호 객체
  const passwordObj = {
    pw: password.value,
  };
  axios
    .post(`http://localhost:3000/api/boards/${numIndex}/pwcheck`, passwordObj)
    .then((res) => {
      // 비밀번호가 맞으면 로직 실행
      if (res.status === 200) {
        axios.delete(`http://localhost:3000/api/boards/${numIndex}`);
      } else {
        alert("비밀번호를 다시 입력해주세요");
        return;
      }

      location.href = "http://127.0.0.1:5500/fe/page/board.html";
    })
    .catch((err) => {
      console.log(err, "글이 삭제가 안됐어");
      alert("비밀번호를 다시 입력해주세요");
      return;
    });
};

// 수정
modifyBtnConfirm.onclick = () => {
  // 비밀번호 객체
  const passwordObj = {
    pw: password2.value,
  };

  console.log(passwordObj);
  axios
    .post(`http://localhost:3000/api/boards/${numIndex}/pwcheck`, passwordObj)
    .then((res) => {
      // 비밀번호가 맞으면 로직 실행
      if (res.status === 200) {
        location.href = `http://127.0.0.1:5500/fe/page/modify.html?page=${numIndex}`;
      } else {
        alert("비밀번호를 다시 입력해주세요");
        return;
      }
    })
    .catch((err) => {
      console.log(err, "글이 삭제가 안됐어");
      alert("비밀번호를 다시 입력해주세요");
      return;
    });
};

// modal 닫기
cancelBtn.onclick = () => {
  modalPopup.style.display = "none";
};
cancelBtn2.onclick = () => {
  modalPopup2.style.display = "none";
};

const userName = document.querySelector(".user_info");
const titleSpan = document.querySelector(".title > span");
const contentDiv = document.querySelector("#content");

async function getDetail() {
  const { data } = await axios.get(
    `http://localhost:3000/api/boards/${numIndex}`
  );

  const dataInfo = data.view;

  console.log(dataInfo);

  userName.innerHTML = data.view.user;
  titleSpan.innerHTML = data.view.title;
  contentDiv.innerHTML = data.view.content;
}

modifyBtn.onclick = () => {
  modalPopup2.style.display = "block";
};

getDetail();
