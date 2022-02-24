const menu = document.querySelector('.burger-icon');
const burger = document.querySelector('.burger');

menu.addEventListener('click', ()=> {
    console.log('you klicked')
    document.getElementById('menu').classList.toggle('show');

})
burger.addEventListener('click', ()=>{
    console.log('clicked');

    document.getElementById('menu').classList.toggle('show');

})
