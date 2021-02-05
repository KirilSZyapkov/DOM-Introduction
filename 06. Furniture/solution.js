function solve() {
    const textArea = document.querySelectorAll('textarea');
    const allBtn = document.querySelectorAll('button');
    const tBody = document.querySelector('tbody');

    allBtn[0].addEventListener('click', () => {
        let input = JSON.parse(textArea[0].value);

        for (let item of input) {
            let tr = document.createElement('tr');

            let tdImage = document.createElement('td');
            let image = document.createElement('img');
            image.setAttribute('src', item.img);
            tdImage.appendChild(image)
            tr.appendChild(tdImage);

            let nameTd = document.createElement('td');
            let pName = document.createElement('p');
            pName.textContent = item.name;
            nameTd.appendChild(pName);
            tr.appendChild(nameTd);

            let price = document.createElement('td');
            let pPrice = document.createElement('p');
            pPrice.textContent = item.price;
            price.appendChild(pPrice);
            tr.appendChild(price);

            let decorationFactor = document.createElement('td');
            let pDecFac = document.createElement('p');
            pDecFac.textContent = item.decFactor;
            decorationFactor.appendChild(pDecFac);
            tr.appendChild(decorationFactor);

            let tdMark = document.createElement('td');
            let mark = document.createElement("input");
            mark.type = 'checkbox';
            tdMark.appendChild(mark);
            tr.appendChild(tdMark);

            tBody.appendChild(tr);
        }
    });
    allBtn[1].addEventListener('click', () => {
        let list = tBody.querySelectorAll('tr');

        let items = {
            decFact: [],
        }
        for (let row of list) {
            let box = row.querySelector('input');
            let isChecked = box.checked;
            if (!isChecked) continue;
            let itemN = box.parentNode.parentNode.children;
            items[itemN[1].textContent] = Number(itemN[2].textContent);
            items.decFact.push(Number(itemN[3].textContent));

        }
        let furnitures = Object.keys(items).slice(1);
        let values = Object.values(items);
        let totalPrice = values.slice(1).reduce((a, b) => a + b, 0);
        let avr = values[0].reduce((a, b) => a + b, 0) / values[0].length;

        textArea[1].value = `Bought furniture: ${furnitures.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avr}`;

    });

}