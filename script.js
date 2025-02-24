let screamer = document.querySelector('#screamer');
console.log('Script connected.');
let flash= document.querySelector('#flash');
const arrayOfLoveWishes = [
    'Кохайте один одного! Це найважливіше!',
    'Будьте щасливі кожної миті!',
    'Живіть у мирі та гармонії!',
    'Нехай ваша любов буде вічною!',
    'Нехай щастя наповнює ваші серця!',
    'Даруйте одне одному тепло та ласку!',
    'Кохання перемагає все!',
    'Будьте поруч у радості та випробуваннях!',
    'Нехай ваша сім’я буде міцною і дружньою!',
    'YOU SHOULD KILL YOURSELF NOW!',
    'Нехай ваша дорога буде усипана квітами!',
    'Кожен день нехай буде сповнений ніжності!',
    'Кохайте щиро, і вас кохатимуть у відповідь!',
    'Відкривайте серця для любові та щастя!',
    'Нехай у вашому житті буде більше яскравих моментів!',
    'Живіть у гармонії з собою та світом!',
    'Нехай ваше кохання надихає інших!',
    'Будьте світлом одне для одного!',
    'Разом ви здатні на все!',
    'Нехай ваше життя буде сповнене радісних моментів!'
];

document.getElementById('btn_wishes').addEventListener('click', () => {
    // alert('Button clicked'); // Для тестування можна розкоментувати
    console.log("Smth should happen");
    let index = Math.floor(Math.random() * arrayOfLoveWishes.length);
    document.getElementById('p_wishes').innerText = arrayOfLoveWishes[index];
    if(index==9){
        screamer.style.display = "block";
        screamer.style.opacity = 1;
        setTimeout(function(){
            flash.style.opacity = 1;
            setTimeout(function(){
                flash.style.opacity = 0;
            }, 100);
        }, 100);
        setTimeout(function(){
            flash.style.opacity = 1;
            setTimeout(function(){
                flash.style.opacity = 0;
            }, 100);
        }, 1000);
        setTimeout(function(){
            flash.style.opacity = 1;
            setTimeout(function(){
                flash.style.opacity = 0;
            }, 100);
        }, 3000);
        setTimeout(function(){
            screamer.style.opacity = 0;
            screamer.style.display = "none";
        }, 5000);
    }
});