const writeFrm = document.getElementById("writeBoard");

writeFrm.onsubmit = async (e) => {
  e.preventDefault();

  const { user, password, title, content } = e.target;

  const userValue = user.value;
  const passwordValue = password.value;
  const titleValue = title.value;
  const contentValue = content.value;

  console.log;
  const data = {
    user: userValue,
    pw: passwordValue,
    title: titleValue,
    content: contentValue,
  };

  if (userValue === "") {
    alert("이름을 입력해주세요");
    return;
  } else if (passwordValue === "") {
    alert("비밀번호를 입력해주세요");
    return;
  } else if (titleValue === "") {
    alert("글제목을 입력해주세요");
    return;
  } else if (contentValue === "") {
    alert("글내용을 입력해주세요");
    return;
  }

  const axiosPost = await axios.post("http://localhost:3000/api/boards", data);
  try {
    console.log(axiosPost, "성공");
    location.href = "http://127.0.0.1:5500/fe/page/board.html";
  } catch (error) {
    console.log(error);
  }
};

// 취소
const cancelBtn = document.getElementById("cancelBtn");
cancelBtn.onclick = () => {
  const confirmQ = confirm("글 작성을 취소하겠습니까?");
  if (!confirmQ) return;
  location.href = "http://127.0.0.1:5500/fe/page/board.html";
};
