const urlStr = window.location.href;
const url = new URL(urlStr);
const urlParams = url.searchParams;
const numIndex = urlParams.get("page");

const modalPopup = document.querySelector(".modal-popup");
const deleteBtn = document.getElementById("deleteBtn");
const cancelBtn = document.getElementById("cancelBtn");
const confirmBtn = document.getElementById("confirmBtn");
const passwordValue = document.getElementById("pw").value;

deleteBtn.onclick = async () => {
  // const data = await axios.get();

  modalPopup.style.display = "block";
  confirmBtn.onclick = () => {
    if (passwordValue)
      axios.delete(`http://localhost:3000/api/boards/${numIndex}`);
  };
};

cancelBtn.onclick = () => {
  modalPopup.style.display = "none";
};
