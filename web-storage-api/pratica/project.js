'use strict';

const nameForm = document.querySelector('#name-form');
const welcomeContainer = document.querySelector('#welcome');
const userNameElement = document.querySelector('#username');
const logoutBtn = document.querySelector('#logout');

function checkUser() {
  const userName = localStorage.getItem('name');
  if (userName) {
    nameForm.style.display = 'none';
    welcomeContainer.style.display = 'block';
    userNameElement.textContent = userName;
    return;
  }
  nameForm.style.display = 'block';
  welcomeContainer.style.display = 'none';
}

checkUser();

nameForm.addEventListener('submit', event => {
  event.preventDefault();
  const nameInput = document.querySelector('#name');
  localStorage.setItem('name', nameInput.value);
  nameInput.value = '';
  checkUser();
});

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('name');
  checkUser();
});