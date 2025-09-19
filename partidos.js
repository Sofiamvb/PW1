(function () {
    const scroller = document.getElementById('dates');
    document.getElementById('prev').onclick = () => scroller.scrollBy({ left: -300, behavior: 'smooth' });
    document.getElementById('next').onclick = () => scroller.scrollBy({ left: 300, behavior: 'smooth' });

    const btnMundial = document.querySelector('.btn-mundial');
    const btnGeneral = document.querySelector('.btn-general');
    const secGeneral = document.getElementById('partidos-general');
    const secMundial = document.getElementById('partidos-mundial');

    function showPartidosGeneral() {
        btnGeneral.classList.add('is-active');
        btnMundial.classList.remove('is-active');
        secGeneral.hidden = false;
        secMundial.hidden = true;
    }

    function showPartidosMundial() {
        btnMundial.classList.add('is-active');
        btnGeneral.classList.remove('is-active');
        secMundial.hidden = false;
        secGeneral.hidden = true;
    }

    btnGeneral.addEventListener('click', showPartidosGeneral);
    btnMundial.addEventListener('click', showPartidosMundial);

    const fechas = [
        { "date": "2025-09-18", "label": "Jue. 18 sep" },
        { "date": "2025-09-19", "label": "Vie. 19 sep" },
        { "date": "2025-09-20", "label": "Sáb. 20 sep" },
        { "date": "2025-09-21", "label": "Dom. 21 sep" },
        { "date": "2025-09-22", "label": "Lun. 22 sep" },
        { "date": "2025-09-23", "label": "Mar. 23 sep" },
        { "date": "2025-09-24", "label": "Mié. 24 sep" },
        { "date": "2025-09-25", "label": "Jue. 25 sep" },
        { "date": "2025-09-26", "label": "Vie. 26 sep" },
        { "date": "2025-09-27", "label": "Sáb. 27 sep" },
        { "date": "2025-09-28", "label": "Dom. 28 sep" },
        { "date": "2025-09-29", "label": "Lun. 29 sep" },
        { "date": "2025-09-30", "label": "Mar. 30 sep" },
        { "date": "2025-10-01", "label": "Mié. 01 oct" },
        { "date": "2025-10-02", "label": "Jue. 02 oct" },
        { "date": "2025-10-03", "label": "Vie. 03 oct" },
        { "date": "2025-10-04", "label": "Sáb. 04 oct" },
        { "date": "2025-10-05", "label": "Dom. 05 oct" },
        { "date": "2025-10-06", "label": "Lun. 06 oct" },
        { "date": "2025-10-07", "label": "Mar. 07 oct" },
        { "date": "2025-10-08", "label": "Mié. 08 oct" },
        { "date": "2025-10-09", "label": "Jue. 09 oct" },
        { "date": "2025-10-10", "label": "Vie. 10 oct" },
        { "date": "2025-10-11", "label": "Sáb. 11 oct" },
        { "date": "2025-10-12", "label": "Dom. 12 oct" },
        { "date": "2025-10-13", "label": "Lun. 13 oct" },
        { "date": "2025-10-14", "label": "Mar. 14 oct" },
        { "date": "2025-10-15", "label": "Mié. 15 oct" },
        { "date": "2025-10-16", "label": "Jue. 16 oct" },
        { "date": "2025-10-17", "label": "Vie. 17 oct" },
        { "date": "2025-10-18", "label": "Sáb. 18 oct" },
        { "date": "2025-10-19", "label": "Dom. 19 oct" },
        { "date": "2025-10-20", "label": "Lun. 20 oct" },
        { "date": "2025-10-21", "label": "Mar. 21 oct" },
        { "date": "2025-10-22", "label": "Mié. 22 oct" },
        { "date": "2025-10-23", "label": "Jue. 23 oct" },
        { "date": "2025-10-24", "label": "Vie. 24 oct" },
        { "date": "2025-10-25", "label": "Sáb. 25 oct" },
        { "date": "2025-10-26", "label": "Dom. 26 oct" },
        { "date": "2025-10-27", "label": "Lun. 27 oct" },
        { "date": "2025-10-28", "label": "Mar. 28 oct" },
        { "date": "2025-10-29", "label": "Mié. 29 oct" },
        { "date": "2025-10-30", "label": "Jue. 30 oct" },
        { "date": "2025-10-31", "label": "Vie. 31 oct" },
        { "date": "2025-11-01", "label": "Sáb. 01 nov" },
        { "date": "2025-11-02", "label": "Dom. 02 nov" },
        { "date": "2025-11-03", "label": "Lun. 03 nov" },
        { "date": "2025-11-04", "label": "Mar. 04 nov" },
        { "date": "2025-11-05", "label": "Mié. 05 nov" },
        { "date": "2025-11-06", "label": "Jue. 06 nov" }
    ]

    const cont = document.getElementById('dates');
    const matchDate = document.querySelector('.match-date');
    cont.innerHTML = '';
    fechas.forEach((f, i) => {
        const btn = document.createElement('button');
        btn.className = 'pill' + (i === 0 ? ' is-active ' : '');
        btn.textContent = f.label;
        btn.addEventListener('click', () => {
            cont.querySelectorAll('.pill.is-active').forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            matchDate.textContent = f.label; 
        });
        cont.appendChild(btn);
    });
    if (fechas[0]) matchDate.textContent = fechas[0].label;

})();