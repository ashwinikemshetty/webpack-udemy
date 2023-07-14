import style from './clearButton.scss';
const button = document.createElement('button');
button.innerHTML = 'Clear'
button.onclick = function(){
    alert("Hello")
}
button.classList.add([style.button])
document.body.appendChild(button)