'use strict';

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

function saveTheme() {
  const isDark = document.body.classList.contains('dark');
  isDark ? localStorage.setItem('dark', true) : localStorage.removeItem('dark');
}

function loadTheme() {
  const darkMode = localStorage.getItem('dark');
  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

const changeThemeBtn = document.querySelector('#change-theme');
changeThemeBtn.addEventListener('change', () => toggleDarkMode());
changeThemeBtn.addEventListener('change', () => saveTheme());