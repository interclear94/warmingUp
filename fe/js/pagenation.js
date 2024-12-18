const listUl = document.querySelector(".list_ul");
const totalList = 76;
const viewList = 8;
const totalPage = Math.ceil(totalList / viewList);
const viewPage = 5;
const totalListArea = Math.ceil(totalPage / viewPage);

for (let i = 0; i < totalList - 1; i++) {
  const list = document.createElement("li");

  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const div4 = document.createElement("div");
  const div5 = document.createElement("div");

  div1.classList.add("no-w");
  div1.innerHTML = "123";
  div2.classList.add("title-w");
  div2.innerHTML = `나는요 너는요 우리는 ${i}요`;
  div3.classList.add("user-w");
  div3.innerHTML = "자카포카";
  div4.classList.add("date-w");
  div4.innerHTML = "2024-02-14";
  div5.classList.add("view-w");
  div5.innerHTML = "1024";

  list.append(div1, div2, div3, div4, div5);

  listUl.append(list);
}

// 페이지 넘버 생성
const page_ol = document.querySelector(".page > ol");

for (let i = 0; i < totalPage - 1; i++) {
  const page_num = document.createElement("li");

  page_num.innerHTML = `${i + 1}`;

  page_ol.append(page_num);
}
// 페이지 array
const pageNode = document.querySelectorAll(".page > ol > li");
const pageArray = Array.from(pageNode);

// 게시글 리스트
const listNode = document.querySelectorAll(".list_ul > li");
const listArray = Array.from(listNode);
// listArray.slice(5, 100);

function init() {
  for (let i = 0; i < totalList - 1; i++) {
    listNode[i].style.display = "none";
  }

  for (let i = 0; i < viewList - 1; i++) {
    listNode[i].style.display = "block";
  }

  // 페이지
  for (let i = 0; i < totalPage - 1; i++) {
    pageNode[i].style.display = "none";
  }

  for (let i = 0; i < viewPage; i++) {
    pageNode[i].style.display = "block";
  }
}

init();
// console.log(listArray);
