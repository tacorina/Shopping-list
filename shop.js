const list = [];
const item = document.querySelector('.item-input');
const allItem = document.getElementById("tr-lista");

let index;

function draw() {
    let str='';
    for (let i = 0; i < list.length; i++) {
        if (list.length > 0) {
            document.querySelector('table').classList.remove('hidden');
            if (list[i].checked) {
                str += `
                    <tr id="tr-lista">
                        <td class="check-box">${list[i].produs}</td>
                        <td><input type="button" value="Purchased" onclick="check(${i})"/> <input type="button" value="Delete item" onclick="del(${i})"/></td>
                    </tr>
                `
            } else {
                str += `
                    <tr id="tr-lista">
                        <td class="unchecked">${list[i].produs}</td>
                        <td><input type="button" value="Purchased" onclick="check(${i})"/> <input type="button" value="Delete item" onclick="del(${i})"/></td>
                    </tr>
                `
            }   
        }
        
    }
    allItem.innerHTML = str;
    index = undefined;
}

function addItem(event) {
    event.preventDefault();

    let newItem = {
        produs: item.value
    }

    if (index === undefined) {
        list.push(newItem);
    } else {
        list[index] = newItem;
    }
    item.value='';

    draw();
}

function check(idx) {
    list[idx].checked = true;

    draw();
}

function sortAsc() {
    list.sort(function(a,b) {
        if (a.produs.toLowerCase() < b.produs.toLowerCase()) {
            return -1;
        } else {
            return 1;
        } 

    })
    draw();
}

function sortDesc() {
    list.sort(function(a,b) {
        if(a.produs.toLowerCase() > b.produs.toLowerCase()) {
           return -1;
        } else {
            return 1;
        } 
       })
   draw();
}

function del(idx) {
    if (confirm (`Are you sure you want to delete ${list[idx].produs} from the list?`)) {
        list.splice(idx,1);
        draw();
    }
}