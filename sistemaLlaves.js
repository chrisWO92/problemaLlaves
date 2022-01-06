let documentFragment = document.createDocumentFragment();
let container = document.createElement("DIV");
document.body.appendChild(container);
container.classList.add(".container");

//container.classList.add("");

class Key {
    constructor(keyName, model, price){
        this.keyName = keyName;
        this.model = model;
        this.price = price;
        this.img = "/source/key.png";
        
        // Verificar si se puede usar el document.createElement() en los this. 
    }
    info() {
        return [this.img, this.keyName, this.model, this.price];
    }
}

const key2 = new Key("llave","1223","35");

document.write(key2.keyName);

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

for (let i = 0; i < 20; i++){

    let randomModel = Math.round(Math.random()*10000);
    let randomPrice = Math.round(Math.random()*10 + 30);

    let div = document.createElement("DIV");
    div.classList.add(`item-${i}`);

    const keyStudent = new Key(`Llave ${i}`,`Model ${randomModel}`,`Price: $${randomPrice}`);

    const keyImage = document.createElement("IMG");
    keyImage.src = keyStudent.img;

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