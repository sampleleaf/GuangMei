// header & nav
const rwdButton = document.querySelector('#svgstyle')
const nav = document.querySelector('nav')

rwdButton.addEventListener('click',function(){
    nav.classList.toggle('rwd')
    nav.classList.toggle('rwd2')
    rwdButton.classList.toggle('svgstyle2')
})

//nav
const hrefpop = document.querySelector('#hrefpop')
for(let i = 0; i < 5; i++){
    hrefpop.children[i].addEventListener('click', function(){
        nav.classList.add('rwd')
        nav.classList.remove('rwd2')
        rwdButton.classList.remove('svgstyle2')
    })
}

//slideshow
const leftButton = document.querySelector('#leftButton')
const rightButton = document.querySelector('#rightButton')
const img = document.querySelector('#changeimg')//輪播的圖
const text = document.querySelector('#changetext')//輪播的文字
const slideshowDot = document.querySelector('#slideshowDot')

let i = 0;//slideshow起始圖片
slideshowDot.children[0].classList.toggle('triggerDot')//slideshow圓點

let leftTrigger = function(){
    img.children[i].classList.toggle('hide')
    text.children[i].classList.toggle('hide')
    slideshowDot.children[i].classList.toggle('triggerDot')//消除原來的圓點
    i--;
    if(i < 0){
        i = img.children.length - 2 //-1變-2是為了不讓text算進img
    }
    img.children[i].classList.toggle('hide')
    text.children[i].classList.toggle('hide')
    slideshowDot.children[i].classList.toggle('triggerDot')//新觸發的圓點
    clearInterval(reset);//重製計時
    reset = setInterval(function(){
        rightTrigger();
    },2000)
}

let rightTrigger = function(){
    img.children[i].classList.toggle('hide')
    text.children[i].classList.toggle('hide')
    slideshowDot.children[i].classList.toggle('triggerDot')//消除原來的圓點
    i++;
    if(i === img.children.length - 1){// -1是為了不讓text算進img
        i = 0
    }
    img.children[i].classList.toggle('hide')
    text.children[i].classList.toggle('hide')
    slideshowDot.children[i].classList.toggle('triggerDot')//新觸發的圓點
    clearInterval(reset);//重製計時
    reset = setInterval(function(){
        rightTrigger();
    },2000)
}

let reset = setInterval(function(){//自動輪播
    rightTrigger();
},2000)
leftButton.addEventListener('click', leftTrigger)
rightButton.addEventListener('click', rightTrigger)
