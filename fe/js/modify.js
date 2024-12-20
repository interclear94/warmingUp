const urlStr = window.location.href;
const url = new URL(urlStr);
const urlParams = url.searchParams;
const numIndex = urlParams.get("page");

const userSpan = document.querySelector(".user");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");

async function dataModify() {
  const {
    data: {
      view: { title, content, user },
    },
  } = await axios.get(`http://localhost:3000/api/boards/${numIndex}`);

  userSpan.innerHTML = `${user}`;
  titleInput.value = `${title}`;
  contentInput.value = `${content}`;

  const cancelBtn = document.getElementById("cancelBtn");

  cancelBtn.onclick = () => {
    const cancelConfirm = confirm("수정을 취소하겠습니까?");
    if (cancelConfirm) {
      location.href = `http://127.0.0.1:5500/fe/page/detail.html?page=${numIndex}`;
    }
  };

  const registBtn = document.getElementById("registBtn");

  registBtn.onclick = async () => {
    const modifyObj = {
      title: titleInput.value,
      content: contentInput.value,
    };

    // console.log(modifyObj);
    const cancelConfirm = confirm("수정을 하시겠습니까?");

    if (cancelConfirm) {
      await axios.patch(
        `http://localhost:3000/api/boards/${numIndex}`,
        modifyObj
      );
      try {
        location.href = `http://127.0.0.1:5500/fe/page/detail.html?page=${numIndex}`;
        console.log("성공");
      } catch (error) {
        console.log(error);
      }
    }
  };
}

dataModify();
