/*
ASINCRONIA

*/



/* Código Asíncrono NO Bloqueante */
(() => {
    console.log("Código Asíncrono");
    console.log("Inicio");

    function dos() {
        setTimeout(function () {
            console.log("Dos");
        }, 1000);
    }

    function uno() {
        setTimeout(function () {
            console.log("Uno");
        }, 0);
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");
})();