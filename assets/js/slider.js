let items = document.querySelectorAll('.slider .list .item');
let prev = document.querySelectorAll('.prev');
let next = document.querySelectorAll('.next');

function getListElement(buttonElement) {
    // Recherche du parent .slider
    let slider = buttonElement.closest('.slider');
    // Recherche de l'élément .list à l'intérieur du slider
    let list = slider.querySelector('.list');
    return list;
}




let active = 0;
let lengthItems = items.length - 1;

next.forEach(element =>{
    element.addEventListener('click', (e)=>{
        let list = getListElement(e.target)
        if(active + 1 > lengthItems){
            active = 0;
        }else{
            active = active + 1;
        }
        reloadSlider(list);
    })
})

prev.forEach(element =>{
    element.addEventListener('click', (e)=>{
        let list = getListElement(e.target)
        if(active - 1 < 0){
            active = lengthItems;
        }else{
            active = active - 1;
        }
        reloadSlider(list);
    })
})


// let refreshSlider = setInterval(()=>{next.click()}, 3000);

function reloadSlider(list)
{
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';
}

