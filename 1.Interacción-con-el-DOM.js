//1: Interacción con el DOM

//Dado el siguiente HTML:

/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme */

Button$$ = document.querySelector(".showme");
console.log(Button$$);

/* 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado */

h1$$ = document.querySelector("#pillado");
console.log(h1$$);

/* 1.3 Usa querySelector para mostrar por consola todos los p */

p$$ = document.querySelectorAll("p");
console.log(p$$);

/* 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon */

h4Pokemon$$ = document.querySelectorAll(".pokemon");
console.log(h4Pokemon$$);

/* 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe". */

span$$ = document.querySelectorAll("span");
console.log(span$$);

/* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe". */

showBatman$$ = document.querySelectorAll('[data-function="testMe"]');
console.log(showBatman$$[2]);
