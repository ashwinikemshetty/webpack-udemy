import _ from 'lodash'
document.getElementById('button').addEventListener('click',function (){
    const header = document.getElementById('header');
    header.innerHTML = 'Changed';

    const items = ['A', 'B', 'C'];
    const ul = document.getElementById('list');
    _.forEach(items, (itemName)=>{
        const item = document.createElement('li');
        item.innerHTML = itemName;
        ul.appendChild(item);
    })
})