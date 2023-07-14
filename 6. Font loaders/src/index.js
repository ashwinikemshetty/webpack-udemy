import style from './index.scss'
import './clearButton'
import _ from 'lodash'
import './assets/fonts/RobotoCondensed-Bold.ttf'

import logoImg from './assets/webpack_logo.png'

const logo = document.getElementById('logo')

logo.src = logoImg

const button = document.getElementById('button');
button.addEventListener('click',function (){
    const header = document.getElementById('header');
    header.innerHTML = 'Changed';
    header.classList.add([style.header])

    const items = ['A', 'B', 'C'];
    const ul = document.getElementById('list');
    _.forEach(items, (itemName)=>{
        const item = document.createElement('li');
        item.innerHTML = itemName;
        ul.appendChild(item);
    })
})
button.classList.add([style.button])