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
const slideshowDot = document.querySelector('#slideshowDot')

let i = 0;//slideshow起始圖片
slideshowDot.children[0].classList.toggle('triggerDot')//slideshow圓點

let leftTrigger = function(){
    img.children[i].classList.toggle('hide')
    slideshowDot.children[i].classList.toggle('triggerDot')//消除原來的圓點
    i--;
    if(i < 0){
        i = img.children.length - 1
    }
    img.children[i].classList.toggle('hide')
    slideshowDot.children[i].classList.toggle('triggerDot')//新觸發的圓點
    clearInterval(reset);//重製計時
    reset = setInterval(function(){
        rightTrigger();
    },2000)
}

let rightTrigger = function(){
    img.children[i].classList.toggle('hide')
    slideshowDot.children[i].classList.toggle('triggerDot')//消除原來的圓點
    i++;
    if(i === img.children.length){
        i = 0
    }
    img.children[i].classList.toggle('hide')
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

//imagegallery
const imgGallery = document.querySelector('#imgGallery')
// const pages = document.querySelector('#pages')

// let pageCount = imgGallery.children.length / 12 //一頁幾張圖

// for (let i = 1 ; i <= pageCount; i++){
//     let createPages = document.createElement('button')
//     createPages.innerText = i;
//     pages.append(createPages);
// }

//imagefilter
// if(document.querySelector('input[name="frameSelector"]')){   
// }

document.querySelectorAll('input[name="frameSelector"]').forEach(function(frameSelect){
    frameSelect.addEventListener('change',function(e){
        let select = e.target.id; //e.target 是被指定的<input>
        for (let i = 0; i < imgGallery.children.length; i++){
            if(select == 'all'){ //被選擇的鏡框形狀
                imgGallery.children[i].classList.remove('hide')
            }else if(select == imgGallery.children[i].children[0].classList[0]){ //顯示所有鏡框
                imgGallery.children[i].classList.remove('hide')
            }else{
                imgGallery.children[i].classList.add('hide')
            }
        }
    })
})

//imagePop
const imagePop = document.querySelectorAll('.pop');
const crossPic = document.querySelectorAll('.crossPic')

for (let i = 0; i < imgGallery.children.length; i++){ //顯示指定imagepop
    imgGallery.children[i].addEventListener('click', function(){
        imagePop[i].classList.remove('hide')
        //imagePopSelect
        let popMainPic = document.querySelectorAll('.popMainPic')
        let scrollPic = document.querySelectorAll('.scrollPic')
        for(let j = 0; j < scrollPic[i].children.length; j++) //scrollPic是nodelist，利用imagepop的i帶入scrollPic，選擇指定的node
        scrollPic[i].children[j].addEventListener('click',function(){ //scrollPic.children[j]是下方列的各個圖案
            popMainPic[i].children[0].children[0].src = scrollPic[i].children[j].children[0].src
            popMainPic[i].children[1].children[0].src = scrollPic[i].children[j].children[1].src
        })
        })
    }

crossPic.forEach(function(cross){ //隱藏imagepop
    cross.addEventListener('click',function(){
        imagePop.forEach(function(pop){
            pop.classList.add('hide')
        })
    })
})