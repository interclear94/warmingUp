async function getData() {
  const { data } = await axios.get("http://localhost:3000/api/boards?=1");
  const {
    list: { count, rows },
  } = data;

  console.log(count, rows);
  const dataLength = rows.length;
  // const dataTotal = list.count;

  // console.log(dataLength);
  const listUl = document.querySelector(".list_ul");

  for (let i = 0; i < dataLength; i++) {
    const list = document.createElement("li");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    const div5 = document.createElement("div");

    const aTag = document.createElement("a");
    aTag.setAttribute(
      "href",
      `http://127.0.0.1:5500/fe/page/detail.html?page=${rows[i].id}`
    );

    div1.classList.add("no-w");
    div1.innerHTML = `${rows[i].id}`;
    div2.classList.add("title-w");
    aTag.innerHTML = `${rows[i].title}`;
    aTag.style.display = "block";
    aTag.style.width = "100%";
    aTag.style.padding = "1rem 0";

    div3.classList.add("user-w");
    div3.innerHTML = `${rows[i].user}`;
    div4.classList.add("date-w");

    const date = rows[i].createdAt;
    const dateStr = date.substr(0, 10);
    div4.innerHTML = `${dateStr}`;
    div5.classList.add("view-w");
    div5.innerHTML = `${rows[i].view}`;

    div2.append(aTag);

    list.append(div1, div2, div3, div4, div5);
    listUl.append(list);
  }

  // 페이지 넘버 생성
  // const page_ol = document.querySelector(".page > ol");

  // for (let i = 0; i < dataTotal; i++) {
  //   const page_li = document.createElement("li");
  //   const page_a = document.createElement("a");

  //   page_a.innerHTML = `${i + 1}`;
  //   page_a.setAttribute("href", `http://localhost:3000/api/boards?=${i + 1}`);
  //   page_li.append(page_a);
  //   page_ol.append(page_li);
  // }

  // console.log(dataArray);
  // for (let i = 0; i < dataArray; i++) {
  //   const element = array[i];
  // }
}

getData();

// console.log("----------");

// for (let i = 0; i < totalList - 1; i++) {

// }

// // 페이지 넘버 생성
// const page_ol = document.querySelector(".page > ol");

// for (let i = 0; i < totalPage - 1; i++) {
//   const page_num = document.createElement("li");

//   page_num.innerHTML = `${i + 1}`;

//   page_ol.append(page_num);
// }
// // 페이지 array
// const pageNode = document.querySelectorAll(".page > ol > li");
// const pageArray = Array.from(pageNode);

// // 게시글 리스트
// const listNode = document.querySelectorAll(".list_ul > li");
// const listArray = Array.from(listNode);
// // listArray.slice(5, 100);

// function init() {
//   for (let i = 0; i < totalList - 1; i++) {
//     listNode[i].style.display = "none";
//   }

//   for (let i = 0; i < viewList - 1; i++) {
//     listNode[i].style.display = "flex";
//   }

//   // 페이지
//   for (let i = 0; i < totalPage - 1; i++) {
//     pageNode[i].style.display = "none";
//   }

//   for (let i = 0; i < viewPage; i++) {
//     pageNode[i].style.display = "flex";
//   }
// }

// init();

// // console.log(listArray)
