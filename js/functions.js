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
   /* enableScroll();
    btn_avanzar_1.parentElement.href = "#sec-3";
    disableScroll();*/

    window.location.href = "https://ramoned-mr.github.io/#sec-3";

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
        // enableScroll();

        comprobandoIdentidad.style.display = "none";
        confirmIdentidad.style.display = "block";

        bar.path.setAttribute('stroke', '#0c6400');

        setTimeout(function () {
            document.getElementById("person-data").style.display = "block";
            document.getElementById("avanzar-2-container").style.display = "block";
           // enableScroll();
           // disableScroll();
        }, 2000);
    }, 4000);
}, true);


let btn_avanzar_2 = document.getElementById("avanzar-2");

btn_avanzar_2.addEventListener("click", function () {
    enableScroll();
    btn_avanzar_2.parentElement.href = "#sec-4";
    disableScroll()
}, true);

let btn_avanzar_3 = document.getElementById("avanzar-3");

btn_avanzar_3.addEventListener("click", function () {
    enableScroll();
    btn_avanzar_3.parentElement.href = "#sec-5";
    disableScroll()
}, true);

let btn_avanzar_4 = document.getElementById("avanzar-4");

btn_avanzar_4.addEventListener("click", function () {
    enableScroll();
    btn_avanzar_4.parentElement.href = "#sec-6";
    disableScroll()
}, true);


let btn_avanzar_5 = document.getElementById("avanzar-5");

btn_avanzar_5.addEventListener("click", function () {
    enableScroll();
    btn_avanzar_5.parentElement.href = "#sec-7";
    disableScroll()
}, true);


let btn_avanzar_6 = document.getElementById("avanzar-6");

btn_avanzar_6.addEventListener("click", function () {
    enableScroll();
    btn_avanzar_6.parentElement.href = "#sec-8";
    disableScroll()
}, true);


let btn_avanzar_7 = document.getElementById("avanzar-7");

btn_avanzar_7.addEventListener("click", function () {
    enableScroll();
    btn_avanzar_7.parentElement.href = "#sec-9";
    disableScroll()
}, true);


let btn_avanzar_8 = document.getElementById("avanzar-8");

btn_avanzar_8.addEventListener("click", function () {
    enableScroll();
    btn_avanzar_8.parentElement.href = "#sec-10";
    disableScroll()
}, true);


let btn_avanzar_9 = document.getElementById("avanzar-9");

btn_avanzar_9.addEventListener("click", function () {
    enableScroll();
    btn_avanzar_9.parentElement.href = "#sec-11";
    disableScroll()
}, true);


let btn_avanzar_10 = document.getElementById("avanzar-10");

btn_avanzar_10.addEventListener("click", function () {
    enableScroll();
    btn_avanzar_10.parentElement.href = "#sec-12";
    disableScroll()
}, true);


let btn_avanzar_11 = document.getElementById("avanzar-11");

btn_avanzar_11.addEventListener("click", function () {
    enableScroll();
    btn_avanzar_11.parentElement.href = "#sec-13";
    disableScroll()
}, true);


let btn_avanzar_12 = document.getElementById("avanzar-12");

btn_avanzar_12.addEventListener("click", function () {
    enableScroll();
    btn_avanzar_12.parentElement.href = "#sec-14";
    disableScroll()
}, true);


let btn_avanzar_13 = document.getElementById("avanzar-13");

btn_avanzar_13.addEventListener("click", function () {
    enableScroll();
    btn_avanzar_13.parentElement.href = "#sec-15";
    disableScroll()
}, true);


let btn_avanzar_14 = document.getElementById("avanzar-14");

btn_avanzar_14.addEventListener("click", function () {
    enableScroll();
    btn_avanzar_14.parentElement.href = "#sec-16";
    disableScroll()
}, true);


let btn_avanzar_15 = document.getElementById("avanzar-15");

btn_avanzar_15.addEventListener("click", function () {
    enableScroll();
    btn_avanzar_15.parentElement.href = "#sec-17";
    disableScroll()
}, true);


let btn_avanzar_16 = document.getElementById("avanzar-16");

btn_avanzar_16.addEventListener("click", function () {
    enableScroll();
    btn_avanzar_16.parentElement.href = "#sec-18";
    disableScroll()
}, true);


let btn_avanzar_17 = document.getElementById("avanzar-17");

btn_avanzar_17.addEventListener("click", function () {
    enableScroll();
    btn_avanzar_17.parentElement.href = "#sec-19";
    disableScroll()
}, true);

let btn_avanzar_18 = document.getElementById("avanzar-18");

btn_avanzar_18.addEventListener("click", function () {
    enableScroll();
    btn_avanzar_18.parentElement.href = "#sec-20";
    disableScroll()
}, true);

let btn_fin = document.getElementById("fin");

btn_fin.addEventListener("click", function () {
    enableScroll();
    btn_fin.parentElement.href = "#sec-1";
    disableScroll()
}, true);