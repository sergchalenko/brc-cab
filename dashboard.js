const menuMain = document.querySelector('.dashboard__sidebar-menu-main');
const menuTasks = document.querySelector('.dashboard__sidebar-menu-tasks');

const dataYear = document.querySelector('.dashboard__data-year');
const dataTasks = document.querySelector('.dashboard__tasks');

menuMain.addEventListener('click', function() {
    menuTasks.classList.remove('_active');
    dataTasks.classList.remove('_active');
    dataYear.classList.add('_active');
    menuMain.classList.add('_active')
})

menuTasks.addEventListener('click', function() {
    menuMain.classList.remove('_active');
    menuTasks.classList.add('_active');
    dataYear.classList.remove('_active');
    dataTasks.classList.add('_active')
})