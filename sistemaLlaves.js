let documentFragment = document.createDocumentFragment();
let container = document.querySelector(".container");

let title = document.createElement("H1");
title.classList.add("title");
title.innerHTML = "SELECTOR DE LLAVES";
container.appendChild(title);


//container.classList.add("");

class Key {
    constructor(keyName, model, price){
        this.keyName = keyName;
        this.model = model;
        this.price = price;
        this.img = "/sources/key.png";
        
        // Verificar si se puede usar el document.createElement() en los this. 
    }
}

/* const keyCollectionGenerator = () => {
    for (let i = 0; i > 20; i++){
        let randomModel = Math.round(Math.random()*10000);
        let randomPrice = Math.round(Math.random()*10 + 30);
        let keyStudent = Key(`Llave ${i}`,`Model ${randomModel}`,`Price: $${randomPrice}`);
        let div = document.createElement("DIV");
        div.classList.add(`item ${i}`);
        div.innerHTML = keyStudent.info[0] + keyStudent.info[1] + keyStudent.info[2] + keyStudent.info[3];
        documentFragment.appendChild(div);
    }
    container.appendChild(documentFragment);
}

keyCollectionGenerator(); */

const hiddenAsign = (number) => {
    document.querySelector(".key-data").value = number;
}

for (let i = 1; i <= 20; i++){

    let randomModel = Math.round(Math.random()*10000);
    let randomPrice = Math.round(Math.random()*10 + 30);

    let div = document.createElement("DIV");
    div.classList.add(`item-${i}`);
    // div.classList.add(`animate__animated`,`animate__bounce`);
    
    // Este tabIndex sirve para que luego al asignarle un css al parámetro div:focus, la caja adquiera un estilo determinado al hacer click sobre ella.
    // Podrías ser lo mismo que agregar un "toggle".

    div.tabIndex = i;

    div.addEventListener("click", ()=>{hiddenAsign(randomModel)});


    const keyStudent = new Key(`Llave ${i}`,`Model ${randomModel}`,`Price: <b style="color: green">$${randomPrice}</b>`);

    const keyImage = document.createElement("IMG");
    keyImage.src = keyStudent.img;
    keyImage.setAttribute("src", keyStudent.img);

    const keyName = document.createElement("H2");
    keyName.innerHTML = keyStudent.keyName;

    const keyModel = document.createElement("H3");
    keyModel.innerHTML = keyStudent.model;

    const keyPrice = document.createElement("P");
    keyPrice.innerHTML = keyStudent.price;

    
    div.appendChild(keyImage);
    div.appendChild(keyName);
    div.appendChild(keyModel);
    div.appendChild(keyPrice);

    documentFragment.appendChild(div);
}

container.appendChild(documentFragment);