// function solve() {
//     const btn = document.querySelectorAll('.add-product');
//     const checkOutBtn = document.querySelector('.checkout');
//     checkOutBtn.addEventListener('click', checkOut);
//     const result = document.querySelector('textarea');
//     for (let a = 0; a < btn.length; a++) {
//         btn[a].addEventListener('click', addPurches);
//     }
//     let sum = 0;
//     let listToPrint = new Set();
//
//     function addPurches(e) {
//         let parent = e.target.parentNode.parentNode;
//         let productName = parent.querySelector('.product-title').textContent;
//         let price = parent.querySelector('.product-line-price').textContent;
//         sum += Number(price);
//         listToPrint.add(productName);
//         result.value += `Added ${productName} for ${price} to the cart.\n`;
//     }
//
//     function checkOut() {
//         result.value += `You bought ${Array.from(listToPrint).join(', ')} for ${sum.toFixed(2)}.`;
//         for (let a = 0; a < btn.length; a++) {
//             btn[a].disabled = true;
//         }
//         checkOutBtn.disabled = true;
//     }
// }

function solve() {
    const btn = document.querySelectorAll('.add-product');
    const checkOutBtn = document.querySelector('.checkout')
    checkOutBtn.addEventListener('click', checkOut);
    const result = document.querySelector('textarea');
    for (let a = 0; a < btn.length; a++) {
        btn[a].addEventListener('click', addPurches);
    }
    let sum = 0;

    let listToPrint = new Set();

    function addPurches(e) {
        let parent = e.target.parentNode.parentNode;
        let list = parent.children;
        let product = list[1];
        let price = list[3];
        let productName = product.children[0];
        sum += Number(price.textContent);
        listToPrint.add(productName.textContent);

        result.value += `Added ${productName.textContent} for ${price.textContent} to the cart.\n`
    }

    function checkOut() {
        result.value += `You bought ${Array.from(listToPrint).join(', ')} for ${sum.toFixed(2)}.`;
        for (let a = 0; a < btn.length; a++) {
            btn[a].disabled = true;
        }
        checkOutBtn.disabled = true;
    }
}