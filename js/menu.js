var navMain = document.querySelector('.page-header__wrapper');
var navToggle = document.querySelector('.toggle');

navMain.classList.remove('page-header__wrapper--menu-nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('page-header__wrapper--menu-closed')) {
    navMain.classList.remove('page-header__wrapper--menu-closed');
    navMain.classList.add('page-header__wrapper--menu-opened');
  } else {
    navMain.classList.add('page-header__wrapper--menu-closed');
    navMain.classList.remove('page-header__wrapper--menu-opened');
  }
});
