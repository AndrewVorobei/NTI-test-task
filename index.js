const toggle = document.querySelector(".private-office");
const menu = document.querySelector(".toggle-menu");

toggle.addEventListener("mouseover", () => {
  menu.classList.toggle("toggle-menu");
});

const adaptiveToggle = document.querySelector(
  ".adaptiveNav-right-block-burger"
);
const adaptiveMenu = document.querySelector(".adaptiveNav-close");

adaptiveToggle.addEventListener("click", () => {
  adaptiveMenu.classList.toggle("adaptiveNav-close");
});

const submitForm = (event) => {
  event.preventDefault();

  const name = document.querySelector(".userName").value;
  const phone = document.querySelector(".userPhone").value;
  const comment = document.querySelector(".userComment").value;

  if (name.trim() === "") {
    alert("Пожалуйста, введите ваше имя.");
    return;
  }

  if (!/^\d{11,12}$/.test(phone)) {
    alert("Пожалуйста, введите корректный номер телефона.");
    return;
  }

  if (comment.trim() === "") {
    alert("Пожалуйста, введите ваш комментарий.");
    return;
  }

  console.log("Имя:", name);
  console.log("Телефон:", phone);
  console.log("Комментарий:", comment);

  document.querySelector(".userName").value = "";
  document.querySelector(".userPhone").value = "";
  document.querySelector(".userComment").value = "";
};
