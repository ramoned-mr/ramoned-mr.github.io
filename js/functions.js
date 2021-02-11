document.addEventListener("readystatechange", function () {
    if (document.readyState == "complete") {
        disableScroll();
    }
}, true);


function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.querySelector('html').scrollTop = window.scrollY;
}

function enableScroll() {
    document.body.style.overflow = null;
}

let btn_iniciar = document.getElementById("btn-iniciar");

btn_iniciar.addEventListener("click", function () {
    enableScroll();
    btn_iniciar.parentElement.href = "#sec-2";
    disableScroll()
}, true);


let fecha = document.getElementById("date");

fecha.addEventListener("change", function (ev) {
    console.log("fecha cambiada.");
    console.log(ev.target.value);
    if (ev.target.value == "2001-01-15") {
        btn_avanzar_1.style.visibility = "visible";
    } else {
        btn_avanzar_1.style.visibility = "hidden";
    }
}, true);


let btn_avanzar_1 = document.getElementById("avanzar-1");

btn_avanzar_1.addEventListener("click", function () {
    enableScroll();
    btn_avanzar_1.parentElement.href = "#sec-3";
    disableScroll()

    var bar = new ProgressBar.Line('#progress', {
        step: function (state, bar, attachment) {
            // bar.path.setAttribute('stroke', state.color);
            bar.path.setAttribute('stroke', '#801700');
        }
    });

    bar.animate(1);

    setTimeout(function () {
        let comprobandoIdentidad = document.getElementById("comprobando-identidad");
        let confirmIdentidad = document.getElementById("confirm-identidad");

        comprobandoIdentidad.style.display = "none";
        confirmIdentidad.style.display = "block";

        bar.path.setAttribute('stroke', '#0c6400');

        setTimeout(function () {
            document.getElementById("person-data").style.display = "block";
            document.getElementById("avanzar-2-container").style.display = "block";
        }, 2000);
    }, 4000);
}, true);


let btn_avanzar_2 = document.getElementById("avanzar-2");

btn_avanzar_2.addEventListener("click", function () {
    enableScroll();
    btn_avanzar_2.parentElement.href = "#sec-4";
    disableScroll()
}, true);