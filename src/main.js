// Coleta elementos
const getEmail = document.querySelector('#email');
const getPassword = document.querySelector('#input-password');
const getLoginBtn = document.querySelector('#login-btn');
const getSubmitBtn = document.querySelector('#submit-btn');
const getCheckAgreement = document.querySelector('#agreement');
const counter = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');
const getEvaluationForm = document.querySelector('#evaluation-form');
const getDataForm = document.querySelector('#form-data');
const getNameData = document.querySelector('#name-data');
const formContainer = document.querySelector('.form-container')

getLoginBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (getEmail.value === 'tryber@test.com' || getPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

getCheckAgreement.addEventListener('change', () => {
  if (getCheckAgreement.checked) {
    getSubmitBtn.disabled = false;
  } else {
    getSubmitBtn.disabled = true;
  }
});

// Contador
const count = () => {
  counter.innerHTML = 500;
  textArea.addEventListener('keyup', () => {
    counter.innerHTML = (500 - (textArea.value.length));
  });
};
count();

// Coleta Formulário

const newFormData = () => {
  const dataForm = new FormData(getEvaluationForm);
  const obj = {};
  dataForm.forEach((key, value) => {
    if (key !== '') {
      obj[value] = dataForm.getAll(value);
    }
  });
  return obj;
};

// Array de Valores dos input do fomulário
const getData = () => {
  const arrFormData = Object.values(newFormData());
  const arrKeyValue = [];
  for (let index = 0; index < arrFormData.length; index += 1) {
    arrKeyValue.push(arrFormData[index]);
  }
  return arrKeyValue;
};

// Atribuindo a nova seção os dados inseridos no forms

const addData = () => {
  const chaves = ['Email', 'Casa', 'Família', 'Avaliação', 'Observações'];
  getNameData.innerHTML = `Nome: ${getData()[0]} ${getData()[1]}`;
  const data = getData().slice(2);
  if (data.length !== 5) {
    chaves.splice(3, 0, 'Matérias');
  }
  for (let index = 0; index < chaves.length; index += 1) {
    if (data[index].length > 1) {
      const div = document.createElement('div');
      div.innerHTML = `${chaves[index]}: ${data[index].join(', ')}`;
      getDataForm.appendChild(div);
    } else {
      const div = document.createElement('div');
      div.innerHTML = `${chaves[index]}: ${data[index]}`;
      getDataForm.appendChild(div);
    }
  }
};

// Submit para aparecer uma nova seção
getEvaluationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  getEvaluationForm.style.display = 'none';
  formContainer.style.display = 'none'
  getDataForm.style.display = 'block';
  addData();
});