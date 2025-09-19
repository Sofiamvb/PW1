
(function () {
  const tabGeneral = document.querySelector('.tab-general');
  const tabMundial = document.querySelector('.tab-mundial');
  const secGeneral = document.getElementById('equipo-general');
  const secMundial = document.getElementById('equipo-mundial');

  function showGeneral() {
    tabGeneral.classList.add('is-active');
    tabMundial.classList.remove('is-active');
    secGeneral.hidden = false;
    secMundial.hidden = true;
  }

  function showMundial() {
    tabMundial.classList.add('is-active');
    tabGeneral.classList.remove('is-active');
    secGeneral.hidden = true;
    secMundial.hidden = false;
  }

  tabGeneral.addEventListener('click', showGeneral);
  tabMundial.addEventListener('click', showMundial);

})();
