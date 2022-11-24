window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('menu-is-active');
    document.querySelector('#burger').classList.toggle('burger-active')
  });
})
