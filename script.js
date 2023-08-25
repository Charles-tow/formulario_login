const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
});

email.addEventListener("blur", () => {
  checkInputEmail();
});

username.addEventListener("blur", () => {
  checkInputUserName();
});

password.addEventListener("blur", () => {
  checkInputPassword();
});

passwordConfirmation.addEventListener("blur", () => {
  checkInputPasswordConfirmation();
});

// checar se todos os campos estão preenchidos para disparar o alert
function checkForm() {
  checkInputUserName();
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordConfirmation();

  const formItems = form.querySelectorAll(".form-content");
  const isValid = [...formItems].every((item) => {
    return item.className === "form-content";
  });

  if (isValid) {
    alert("NOVA CONTA CRIADA COM SUCESSO");
  }
}

//pegar o que o usuário digitou e apresentar mensagem de erro quando necessário
function checkInputUserName() {
  const userNameValue = username.value;

  if (userNameValue === "") {
    //aviso com mensagem do erro
    errorInput(username, "Preenchimento obrigatório");
  } else if (userNameValue.length < 3) {
    errorInput(username, "O nome precisa conter no mínimo 3 letras");
  } else {
    const formItem = username.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    errorInput(email, "Preenchimento obrigatório");
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputPassword() {
  const passwordValue = password.value;

  if (passwordValue === "") {
    errorInput(password, "Coloque uma senha válida com mínimo de 6 caracteres");
  } else if (passwordValue.length < 6) {
    errorInput(password, "Sua senha é muito curta");
  } else {
    const formItem = password.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputPasswordConfirmation() {
  const passwordValue = password.value;
  const confirmationPasswordValue = passwordConfirmation.value;

  if (confirmationPasswordValue === "") {
    errorInput(passwordConfirmation, "Confirme sua senha");
  } else if (confirmationPasswordValue !== passwordValue) {
    errorInput(passwordConfirmation, "As senhas não coincidem");
  } else {
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-content";
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;

  formItem.className = "form-content error";
}
