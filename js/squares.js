function createAppendElement(domElemPath, elemName, content_string) {
    const domElem = document.querySelector(domElemPath);
    const el = document.createElement(elemName);
    domElem.appendChild(el);
    el.innerText = content_string;
}

createAppendElement('#cubrir', 'h2', 'Servicios para cubrir tus necesidades');
createAppendElement('#cubrir', 'p', 'Contamos con una gran variedad de servicios y productos de calidad que cumplen con los más altos estándares internacionales de desempeño, funcionalidad y eficiencia.');


// function createAppendElement(domElemPath, elemName, htmlString) {
//     const domElem = document.querySelector(domElemPath);
//     const el = document.createElement(elemName);
//     domElem.appendChild(el);
//     domElem.innerHTML = htmlString;
// }

// createAppendElement('#cubrir', 'h2', 'Servicios para cubrir tus necesidades');


// // Grab icon_square ID from DOM
// const squares = document.getElementById("icon_squares");
// const divElem = document.createElement("div");
// const iconElem = document.createElement("img");
// const divChildElem = document.createElement("div");
// // Necesisario Inyectar Elemento a section princiapl
// squares.appendChild(divElem);
// // Necesisario Obtener elemento despues de que fue creado
// const childDiv = document.querySelector("#icon_squares > div");
// childDiv.appendChild(divChildElem);
// // Necesisario Obtener elemento despues para despues  agregarle el elemento img
// const grandChildIcon = document.querySelector("#icon_squares > div > div");
// grandChildIcon.appendChild(iconElem);

// const domIconElem = document.querySelector("#icon_squares > div > div > img")

// domIconElem.setAttribute("src", "http://");


// function createAppendElement(domelem, elemName, ) {
//     const DomElem = document.querySelector(domelem);
//     const el = document.createElement(elemName);
//     DomElem.appendChild(el);
// }

// createAppendElement("#icon_squares > div > div", 'h1'); 

