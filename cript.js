const cards = [

    {
        id: 1,
        brand: 'Ford',
        model: 'Fiesta',
        color: 'Red',
        year: 2018,
        price: 18000000 
    },
    {
        id: 2,
        brand: 'Nissan',
        model: 'NP300 NAVARA',
        color: 'Orange',
        year: 2016,
        price: 40000000
    },
    {
        id: 3,
        brand: 'Toyota',
        model: 'TX-L',
        color: 'White',
        year: 2017,
        price: 102000000 
    },
    {
        id: 4,
        brand: 'Mazda',
        model: 'CX-30',
        color: 'Blue',
        year: 2020,
        price: 31000000 
    },
    {
        id: 5,
        brand: 'Kia',
        model: 'Picanto X-Line',
        color: 'Black',
        year: 2012,
        price: 25000000    
    },
];
function printcards() {
    const container = document.getElementById('container-cards');
    let html ='';
    cards.forEach((element) => {
        html += `<tr>
                     <td>${element.brand}</td>
                     <td>${element.model}</td>
                     <td>${element.color}</td>
                     <td>${element.year}</td>
                     <td>${element.price}</td>
                     <td><button onclick="deletecards(${element.id})"class="btn btn-danger">Eliminar</button></td>
                     </tr>`;
    });
    container.innerHTML = html;            
}

function deletecards(id) {
    const index = cards.findIndex((element) => element.id == id );
    cards.splice(index, 1);

    printcards();
}
function addcards() {
    const brand = document.getElementById('brand').value;
    
    const model = document.getElementById('model').value;

    const color = document.getElementById('color').value;

    const year = document.getElementById('year').value;

    const price = document.getElementById('price').value;

    const newCards = {
        brand,
        model,
        color,
        year,
        price
    }
    cards.push(newCards);
    printcards();

    document.getElementById('form').reset();
}




printcards();