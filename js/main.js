// MENÚ RESPONSIVE

const menu = document.querySelector(".nav-menu");

const boton = document.querySelector(".menu-toggle");

boton.addEventListener("click",()=>{

    menu.classList.toggle("active");

});
// CAMBIAR COLOR HEADER

window.addEventListener("scroll",()=>{

    const header=document.querySelector(".header");

    if(window.scrollY>50){

        header.style.background="#05382D";

    }

    else{

        header.style.background="transparent";

    }

});
//================ HISTORIA COMPLETA ================

const botonHistoria = document.querySelector("#BOTON-HISTORIA");

const historiaCompleta = document.querySelector("#HISTORIA-COMPLETA");

if (botonHistoria && historiaCompleta) {

    botonHistoria.addEventListener("click", () => {

        historiaCompleta.classList.toggle("visible");

        const estaVisible =
            historiaCompleta.classList.contains("visible");

        botonHistoria.textContent = estaVisible
            ? "OCULTAR HISTORIA"
            : "VER HISTORIA COMPLETA";

    });

}
//================ RECONOCIMIENTOS ================

const tarjetasReconocimiento =
    document.querySelectorAll(".reconocimiento-card");

const observadorReconocimientos =
    new IntersectionObserver((entradas, observador) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("mostrar");

                observador.unobserve(entrada.target);

            }

        });

    }, {

        threshold: 0.15

    });

tarjetasReconocimiento.forEach((tarjeta) => {

    observadorReconocimientos.observe(tarjeta);

});

//================ HERÁLDICA ================

const tarjetasHeraldica =
    document.querySelectorAll(".heraldica-card");

const observadorHeraldica =
    new IntersectionObserver((entradas, observador) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("mostrar");

                observador.unobserve(entrada.target);

            }

        });

    }, {

        threshold: 0.15

    });

tarjetasHeraldica.forEach((tarjeta) => {

    observadorHeraldica.observe(tarjeta);

});

//================ JERARQUÍA ================

const tarjetasJerarquia =
    document.querySelectorAll(".jerarquia-card");

const observadorJerarquia =
    new IntersectionObserver((entradas, observador) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("mostrar");

                observador.unobserve(entrada.target);

            }

        });

    }, {

        threshold: 0.15

    });

tarjetasJerarquia.forEach((tarjeta) => {

    observadorJerarquia.observe(tarjeta);

});

//==================================================
// GALERÍA
//==================================================

const elementosGaleria =
    Array.from(document.querySelectorAll(".galeria-item"));

const visorGaleria =
    document.querySelector("#VISOR-GALERIA");

const imagenVisor =
    document.querySelector("#IMAGEN-VISOR");

const descripcionVisor =
    document.querySelector("#DESCRIPCION-VISOR");

const botonCerrarVisor =
    document.querySelector("#CERRAR-VISOR");

const botonImagenAnterior =
    document.querySelector("#IMAGEN-ANTERIOR");

const botonImagenSiguiente =
    document.querySelector("#IMAGEN-SIGUIENTE");

let indiceImagenActual = 0;

function mostrarImagenGaleria(indice) {

    if (
        elementosGaleria.length === 0 ||
        !visorGaleria ||
        !imagenVisor ||
        !descripcionVisor
    ) {
        return;
    }

    if (indice < 0) {

        indice = elementosGaleria.length - 1;

    }

    if (indice >= elementosGaleria.length) {

        indice = 0;

    }

    indiceImagenActual = indice;

    const elemento = elementosGaleria[indice];

    const rutaImagen =
        elemento.dataset.imagen;

    const descripcion =
        elemento.dataset.descripcion || "Fotografía de la Tuna Full";

    imagenVisor.src = rutaImagen;

    imagenVisor.alt = descripcion;

    descripcionVisor.textContent = descripcion;

    visorGaleria.classList.add("mostrar");

    visorGaleria.setAttribute("aria-hidden", "false");

    document.body.classList.add("visor-abierto");

    botonCerrarVisor?.focus();

}

function cerrarVisorGaleria() {

    if (!visorGaleria || !imagenVisor) {
        return;
    }

    visorGaleria.classList.remove("mostrar");

    visorGaleria.setAttribute("aria-hidden", "true");

    document.body.classList.remove("visor-abierto");

    imagenVisor.src = "";

    elementosGaleria[indiceImagenActual]?.focus();

}

elementosGaleria.forEach((elemento, indice) => {

    elemento.addEventListener("click", () => {

        mostrarImagenGaleria(indice);

    });

});

botonCerrarVisor?.addEventListener(
    "click",
    cerrarVisorGaleria
);

botonImagenAnterior?.addEventListener("click", () => {

    mostrarImagenGaleria(indiceImagenActual - 1);

});

botonImagenSiguiente?.addEventListener("click", () => {

    mostrarImagenGaleria(indiceImagenActual + 1);

});

visorGaleria?.addEventListener("click", (evento) => {

    if (evento.target === visorGaleria) {

        cerrarVisorGaleria();

    }

});

document.addEventListener("keydown", (evento) => {

    if (!visorGaleria?.classList.contains("mostrar")) {
        return;
    }

    if (evento.key === "Escape") {

        cerrarVisorGaleria();

    }

    if (evento.key === "ArrowLeft") {

        mostrarImagenGaleria(indiceImagenActual - 1);

    }

    if (evento.key === "ArrowRight") {

        mostrarImagenGaleria(indiceImagenActual + 1);

    }

});

//==================================================
// FRAGMENTO DE CANCIÓN
//==================================================

const fragmentoContenido =
    document.querySelector(".fragmento-contenido");

if (fragmentoContenido) {

    const observadorFragmento =
        new IntersectionObserver((entradas, observador) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("mostrar");

                    observador.unobserve(entrada.target);

                }

            });

        }, {

            threshold: 0.25

        });

    observadorFragmento.observe(fragmentoContenido);

}

//==================================================
// TUNA FULL
//==================================================

const contenidoTunaFull =
    document.querySelector(".tuna-full-contenido");

if (contenidoTunaFull) {

    const observadorTunaFull =
        new IntersectionObserver((entradas, observador) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("mostrar");

                    observador.unobserve(entrada.target);

                }

            });

        }, {

            threshold: 0.25

        });

    observadorTunaFull.observe(contenidoTunaFull);

}