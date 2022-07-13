import json from "./items.json" assert {type:"json"};

let DB = json;

const loyoutItems = document.getElementById('LoyoutItems');
const listaCarrito = document.getElementById('items');



document.addEventListener('DOMContentLoaded', ()=>{
    FillLayoutWidthItems();
});

function AdditemToCar(ID){
    let item = DB.find(item =>{
        if(item.Id === ID) return item;
    });

    let count = listaCarrito.childElementCount;

    const tr = document.createElement('tr');
    tr.id = item.Id;

    const number = document.createElement('td');
    number.innerText = count + 1;
    tr.appendChild(number);

    const name = document.createElement('td');
    name.innerText = item.Name;
    tr.appendChild(name);

    const cant = document.createElement('td');
    cant.innerText = 1;
    tr.appendChild(cant);

    const buttons = document.createElement('td');

    const plus = document.createElement('button');
    plus.className = 'btn btn-info btn-sm';
    plus.innerText = '+';
    plus.addEventListener('click', (e)=>{
        AddItems(item.Id);
    });
    buttons.appendChild(plus);

    const minus = document.createElement('button');
    minus.className = 'btn btn-danger btn-sm';
    minus.innerText = '-';
    minus.addEventListener('click', (e)=>{
        RemoveItem(item.Id);
    });
    buttons.appendChild(minus);
    tr.appendChild(buttons);

    const total = document.createElement('td');
    total.innerText = item.Price;
    tr.appendChild(total);

    listaCarrito.appendChild(tr);



    DiscountItemFromStock(item.Id);

}

function AddItems(Id){
    console.log(Id);

}

function RemoveItem(Id){
    console.log(Id);
}


function FillLayoutWidthItems(){

    loyoutItems.innerHTML = '';

    DB.forEach(item => {

        const col = document.createElement('div');
        col.className = 'col mb-5';

        const card = document.createElement('div');
        card.className = 'card h-100 seleccion';


        const divCir = document.createElement('div');
        divCir.className = 'circulo-stock';

        const divCant = document.createElement('div');
        divCant.className = 'item-cant';
        divCant.innerText = item.Stock;
        divCir.appendChild(divCant);
        card.appendChild(divCir);

        const imagen = document.createElement('img');
        imagen.src = item.ImgRoot;
        imagen.className = 'card-img-top';
        imagen.alt = 'Logo';
        card.appendChild(imagen);


        const divCardBody = document.createElement('div');
        divCardBody.className = 'card-body p-4 card-b-margin';

        const divText = document.createElement('div');
        divText.className = 'text-center detail-product';

        const h4 = document.createElement('h4');
        h4.innerText = item.Price;
        divText.appendChild(h4);

        const p = document.createElement('p');
        p.innerText = `- stock ${item.Stock}`;
        divText.appendChild(p);

        const h5 = document.createElement('h5');
        h5.className = 'fw-bolder';
        h5.innerText = item.Name;
        divText.appendChild(h5);

        divCardBody.appendChild(divText);
        card.appendChild(divCardBody);

        const footer = document.createElement('div');
        footer.className = 'card-footer p-4 pt-0 border-top-0 bg-transparent card-f-ocultar';


        const divTextCenter = document.createElement('div');
        divTextCenter.className = 'text-center';

        const tag = document.createElement('a');
        tag.className = 'btn btn-outline-dark mt-auto';
       
        tag.id = item.Id;
        tag.innerHTML = '<i class="bx bxs-cart-add" ></i> add';
        tag.addEventListener('click', (e)=>{
            AdditemToCar(e.target.id);
        })

        divTextCenter.appendChild(tag);

        footer.appendChild(divTextCenter);
        card.appendChild(footer);
        col.appendChild(card);
        loyoutItems.appendChild(col);
        
        });
        
}


function DiscountItemFromStock(Id){

    const items = [...loyoutItems.children];

    console.log(items);

}




