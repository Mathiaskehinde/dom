let addToCartButtons = document.getElementsByClassName('btn-primary')
let cartContainer = document.getElementsByTagName('tbody')[0]
// let quantityFields = document.getElementsByClassName('num')
let delete_buttons = document.getElementsByClassName('uk-button-danger')

// picking up all the Add-To-Cart buttons
for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].addEventListener('click', addToCart)
    
}
// This function helps to add items to our cart
function addToCart(event){

    
    let itemContainer = document.createElement('tr')
    let btn = event.target
    let btnGrandParent = btn.parentElement.parentElement
    let btnParent = btn.parentElement
    let itemImage = btnGrandParent.children[0].src
    let itemName = btnParent.children[0].innerText
    let itemPrice = btnParent.children[1].innerText
    
    
    itemContainer.innerHTML = `
    <td><input class="uk-checkbox" type="checkbox"></td>
    <td><img class="uk-preserve-width uk-border-circle" src=${itemImage} width="40" alt=""></td>
    <td class="uk-table-link">
        <h3 class = "item-name">${itemName}</h3>
    </td>
    <td class="uk-text-truncate item-price"><h3>${itemPrice}</h3></td>
    <td><input type = 'number' class = 'num' value = '1'></td>
    <td class="uk-text-truncate total-price"><h3>${itemPrice}</h3></td>
    <td><button class="uk-button uk-button-danger" type="button">Remove</button></td>
`

    cartContainer.append(itemContainer)






    function updateGrandTotal() {
        let total = 0;
    
        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                const itemPrice = parseInt(itemPrices[index].textContent.replace(/[^0-9]/g, ''));
                const quantity = parseInt(quantities[index].value);
                const itemTotal = itemPrice * quantity;
                console.log(`Item Total for item ${index}: ${itemTotal}`);
                total += itemTotal;
            }
        });
    
        console.log(`Grand Total: ${total}`);
        grandTotal.textContent = `#${total.toLocaleString()}`;
    }
    





//     // Get references to the relevant DOM elements
// const checkboxes = document.querySelectorAll('.uk-checkbox');
// const itemPrices = document.querySelectorAll('.item-price h3');
// const quantities = document.querySelectorAll('.num');
// const grandTotal = document.querySelector('.grand-total h3 strong');

// // Add event listeners to checkboxes and quantities
// checkboxes.forEach((checkbox, index) => {
//     checkbox.addEventListener('change', () => updateGrandTotal());
//     quantities[index].addEventListener('input', () => updateGrandTotal());
// });

// // Function to update the grand total based on selected items and quantities
// function updateGrandTotal() {
//     let total = 0;

//     checkboxes.forEach((checkbox, index) => {
//         if (checkbox.checked) {
//             const itemPrice = parseInt(itemPrices[index].textContent.replace(/[^0-9]/g, ''));
//             const quantity = parseInt(quantities[index].value);
//             const itemTotal = itemPrice * quantity;
//             total += itemTotal;
//         }
//     });

//     grandTotal.textContent = `#${total.toLocaleString()}`;
// }





    // Accessing individual quantity fields
    for(let i = 0; i < quantityFields.length; i++){
        quantityFields[i].value = 1
        quantityFields[i].addEventListener('change', totalCost)
                
    }

    // Accessing individual quantity fields
    for(let i = 0; i < delete_buttons.length; i++){
        delete_buttons[i].addEventListener('click', removeItem)
    }

    grandTotal()

   
}



// This function helps to multiply the quantity and the price
function totalCost(event){
    let quantity = event.target
    quantity_parent = quantity.parentElement.parentElement
    price_field = quantity_parent.getElementsByClassName('item-price')[0]
    total_field = quantity_parent.getElementsByClassName('total-price')[0]
    price_field_content = price_field.innerText.replace('$', '')
    total_field.children[0].innerText = '$' +  quantity.value * price_field_content
    grandTotal()
    if(isNaN(quantity.value)|| quantity.value <= 0){
        quantity.value = 1
    }

    
    
}

// This function helps to add up the total of the items
function grandTotal(){
    let total = 0
    let grand_total = document.getElementsByClassName('grand-total')[0]
    all_total_fields = document.getElementsByClassName('total-price')
    for(let i = 0; i < all_total_fields.length; i++){
        all_prices = Number(all_total_fields[i].innerText.replace('$', ''))
        total+=all_prices
    }
    grand_total.children[0].innerText = "$"+total
    grand_total.children[0].style.fontWeight = 'bold'
    console.log(total)
}


function removeItem(event){
    del_btn = event.target
    del_btn_parent = del_btn.parentElement.parentElement
    del_btn_parent.remove()
    console.log(del_btn)
    grandTotal()
    
}