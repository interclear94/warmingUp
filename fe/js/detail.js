const urlStr = window.location.href;
const url = new URL(urlStr);
const urlParams = url.searchParams;
const numIndex = urlParams.get("page");

const modalPopup = document.querySelector(".modal-popup");
const deleteBtn = document.getElementById("deleteBtn");
const cancelBtn = document.getElementById("cancelBtn");
const confirmBtn = document.getElementById("confirmBtn");

const passwordValue = document.getElementById("pw").value;

deleteBtn.onclick = () => {
  console.log("확인 하고 있어요");
  // const data = await axios.get();

  modalPopup.style.display = "block";
  // confirmBtn.onclick = () => {
  //   if (passwordValue)
  //     axios.delete(`http://localhost:3000/api/boards/${numIndex}`);
  // };
};

cancelBtn.onclick = () => {
  modalPopup.style.display = "none";
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

getDetail();
