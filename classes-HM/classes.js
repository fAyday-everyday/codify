
const DISCOUNT_ELEMENT_ID = 'discountCheckbox'
const GOOD_NAME_ID = 'goodName'
const GOOD_PRICE_ID = 'goodPrice'

function generateId() {
    const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const uniqid = randLetter + Date.now();

    return uniqid
}

// Shopping Basket
class Basket {
    constructor(goodName, hasDiscount = false, price = 0) {
        this.id = generateId();
        this.goodName = goodName;
        this.hasDiscount = hasDiscount;
        this.price = price
    }
}

function createModal(addGoodButton, closeModalButton) {
     // modal window
     const modal = document.createElement('dialog')

     // input fields
     const goodNameInput = document.createElement('input')
     goodNameInput.id = GOOD_NAME_ID
     goodNameInput.placeholder = 'name'
     goodNameInput.style.display = 'block'
     
     const goodPriceInput = document.createElement('input')
     goodPriceInput.id = GOOD_PRICE_ID
     goodPriceInput.placeholder = 'price'
     goodPriceInput.type = 'number'
     goodPriceInput.style.display = 'block'
 
     const goodDiscountCheckbox = document.createElement('input')
     goodDiscountCheckbox.id = DISCOUNT_ELEMENT_ID
     goodDiscountCheckbox.type = 'checkbox'
     goodDiscountCheckbox.style.display = 'block'
 
     const goodDiscountCheckboxLabel = document.createElement('label')
     goodDiscountCheckboxLabel.for = DISCOUNT_ELEMENT_ID
     goodDiscountCheckboxLabel.innerText = 'discount'
 
     const goodDiscountContainer = document.createElement('div')
     goodDiscountContainer.style.cssText = `
         display: flex; 
         align-items: center;
     `;
     goodDiscountContainer.appendChild(goodDiscountCheckbox)
     goodDiscountContainer.appendChild(goodDiscountCheckboxLabel)
 
     modal.appendChild(goodNameInput)
     modal.appendChild(goodPriceInput)
     modal.appendChild(goodDiscountContainer)
     modal.appendChild(addGoodButton)
     modal.appendChild(closeModalButton)
    
    return modal;
}

// Eventlistener
window.addEventListener('DOMContentLoaded', () => {
    // selection
    const app = document.querySelector('#app');

    // table
    const table = document.createElement('table');
    const thead = document.createElement('thead')
    const tbody = document.createElement('tbody')
    const tr = document.createElement('tr');

    thead.appendChild(tr);
    table.appendChild(thead);

    const headerItems = ['ID', 'Name', 'Price', 'Discount']
    headerItems.forEach((name) => {
        const td = document.createElement('td');
        td.innerText = name;

        tr.appendChild(td);
    })
    table.appendChild(tbody)

    const addButton = document.createElement('button');
    addButton.innerText = 'add';

    const basketList = []; 

    // func
    function createGood(basketItem) {
        const basketContainer = document.createElement('tr')

        const td1 = document.createElement('td');
        td1.innerText = basketItem.id

        const td2 = document.createElement('td')
        td2.innerText = basketItem.goodName;

        const td3 = document.createElement('td');
        td3.innerText = basketItem.price;

        const td4 = document.createElement('td');
        td4.innerText = basketItem.hasDiscount ? 'yes' : 'no';

        basketContainer.appendChild(td1)
        basketContainer.appendChild(td2)
        basketContainer.appendChild(td3)
        basketContainer.appendChild(td4)
        tbody.appendChild(basketContainer)
    }

    function toggleModal() {
        modal.open = !modal.open;
    }

    function addGood() {
        const name = document.querySelector(`#${GOOD_NAME_ID}`);
        const price = document.querySelector(`#${GOOD_PRICE_ID}`);
        const discount = document.querySelector(`#${DISCOUNT_ELEMENT_ID}`);

        if(!name.value && !price.value) {
            return;
        }

        createGood(new Basket(name.value, discount.checked, price.value));
        name.value = null;
        price.value = null;
        discount.checked = false;
        toggleModal()
    }

    const addGoodButton = document.createElement('button')
    addGoodButton.innerText = 'add product'
    const closeModalButton = document.createElement('button')
    closeModalButton.innerText = 'cancel'

    const modal = createModal(addGoodButton, closeModalButton)

    // EventListener
    addButton.addEventListener('click', toggleModal)
    addGoodButton.addEventListener('click', addGood)
    closeModalButton.addEventListener('click', toggleModal)

    app.appendChild(modal);
    app.appendChild(addButton);
    app.appendChild(table);
});
