function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    const inputText = document.querySelector('textarea');
    const restaurant = document.querySelector('#bestRestaurant>p');
    const workers = document.querySelector('#workers>p');

    function onClick() {
        let input = JSON.parse(inputText.value);
        let listRestaurant = {};
        for (let el of input) {
            let [name, ...params] = el.split(' - ');
            params = params[0].split(', ').map(x => x.split(' '));
            for (let x of params) {
                x[1] = Number(x[1]);
            }
            params.sort((a, b) => b[1] - a[1]);

            if (!listRestaurant.hasOwnProperty(name)) {
                listRestaurant[name] = {
                    staff: params,
                    averageSalary: 0,
                };
            } else {
                let x = listRestaurant[name].staff;
                x = x.concat(params);
                x.sort((a, b) => b[1] - a[1]);
                listRestaurant[name].staff = x;
            }

            for (let sal of listRestaurant[name].staff) {
                listRestaurant[name].averageSalary += sal[1];
            }
            listRestaurant[name].averageSalary /= listRestaurant[name].staff.length;
        }
        let sorted = Object.entries(listRestaurant);
        sorted.sort((a, b) => {
            let [nameA, staffA] = a;
            let [nameB, staffB] = b;
            return staffB.averageSalary - staffA.averageSalary;
        })
        let bestRestaurant = sorted[0];
        let avr = bestRestaurant[1].averageSalary.toFixed(2);
        let bSel = bestRestaurant[1].staff[0][1].toFixed(2);
        let toPrint = `Name: ${bestRestaurant[0]} Average Salary: ${avr} Best Salary: ${bSel}`;
        restaurant.textContent = toPrint;
        let worToPrint = bestRestaurant[1].staff;
        let line = '';
        for(let w of worToPrint){
            line += `Name: ${w[0]} With Salary: ${w[1]} `
        }
        workers.textContent = line;
    }
}