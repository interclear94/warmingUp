const urlStr = window.location.href;
const url = new URL(urlStr);
const urlParams = url.searchParams;
const numIndex = urlParams.get("page");

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
