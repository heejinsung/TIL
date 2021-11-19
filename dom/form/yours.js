const dropdown = document.querySelector('.dropdown');
const toggleBtn = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');
const options = document.querySelectorAll('.dropdown-option');
const nextBtn = document.querySelector('.next-button');

toggleBtn.addEventListener('click', function () {
  menu.classList.toggle('show');
});
toggleBtn.addEventListener('blur', function () {
  menu.classList.remove('show');
});

options.forEach(function (item) {
  item.addEventListener('click', function (e) {
    const branchName = e.currentTarget.textContent.trim();
    toggleBtn.textContent = branchName;
    toggleBtn.classList.add('selected');
    nextBtn.removeAttribute('disabled');
  });
});
