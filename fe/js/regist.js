const writeFrm = document.getElementById("writeBoard");

writeFrm.onsubmit = async (e) => {
  e.preventDefault();
  console.log(e.target);

  const { user, password, title, content } = e.target;

  console.log;
  const data = {
    user: user.value,
    pw: password.value,
    title: title.value,
    content: content.value,
  };

  const axiosPost = await axios.post("http://localhost:3000/api/write", data);
  try {
    console.log(axiosPost, "성공");
  } catch (error) {
    console.log(error);
  }
};
