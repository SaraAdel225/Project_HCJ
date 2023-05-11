// Setting Box
document.documentElement.style.setProperty(`--main-color`,window.localStorage.color)

let iconFaCog = document.querySelector(".iconSet i")
let setBox = document.querySelector(".setBox")
let randomBg = document.querySelectorAll(".randomBg span")

randomBg.forEach((el)=>{
    el.onclick = function(){
        randomBg.forEach((el)=>{
            el.classList.remove("active")
        })
        el.classList.add("active")
    }
})

let listColor = document.querySelectorAll(".listColor li")
listColor.forEach((el)=>{
    if(el.dataset.color == window.localStorage.color){
        el.classList.add("active")
    }
    el.onclick = function(){
        listColor.forEach((el)=>{
            el.classList.remove("active")
        })
        el.classList.add("active")
        window.localStorage.color = el.dataset.color
        document.documentElement.style.setProperty(`--main-color`,window.localStorage.color)
    }
})
iconFaCog.onclick = function(){
    iconFaCog.classList.toggle("fa-spin")
    setBox.classList.toggle("open")

}
// End Setting Box
// icon in small Size
let icon = document.querySelector(".icon")
let ul = document.querySelector(".listHead")
let widthWindow = 1080


function checkScreenSize(){
    if(window.innerWidth  <= widthWindow ){
        icon.style.display = "block"
    }else{
        icon.style.display = "none"
    }
}
icon.onclick = function(){
    if(ul.style.display == "block"){
        ul.style.display = "none"
        icon.classList.remove("click")
    }else{
        ul.style.display = "block"
        icon.classList.add("click")
    }
}
setInterval(checkScreenSize,100) 
// END icon
// header when scroll
let contentLand = document.querySelector(".land_page .content")
let header = document.querySelector(".header")
window.onscroll = function(){
    if(window.scrollY >= contentLand.offsetTop - 300){
        header.style.backgroundColor = "white"
        document.querySelectorAll(".listHead li a").forEach((el)=>{
            el.style = "color:black"
            if(el.classList == "active"){
                el.style.color= `${window.localStorage.color}`
            }
        })
        if(window.innerWidth  <= widthWindow ){
            document.querySelector(".header .listHead").style.backgroundColor= "#EEE"
        }
        document.querySelectorAll(".listHead li a").forEach((el)=>{
            el.style = "color:black"
        })
        document.querySelectorAll(".icon span").forEach((el)=>{
            el.style.backgroundColor = "black"
        })
    
    }else{
        header.style.backgroundColor = "transparent"
        document.querySelectorAll(".listHead li a").forEach((el)=>{
            el.style = "color:white"
            if(el.classList == "active"){
                el.style.color= `${window.localStorage.color}`
            }
        })
        if(window.innerWidth  <= widthWindow ){
            document.querySelector(".header .listHead").style.backgroundColor= "#000000da"
        }
        document.querySelectorAll(".listHead li a").forEach((el)=>{
            el.style = "color:white"
        })
        document.querySelectorAll(".icon span").forEach((el)=>{
            el.style.backgroundColor = "white"
        
    })
}
// Start moving img in about Page
    if(window.scrollY >= contentLand.offsetTop +300){
        document.querySelector(".about_page .image img").style.right = "100px"
    }else{
        document.querySelector(".about_page .image img").style.right = "-400px"
    }
    // End Moving img in about page 
    // Start Moving Skills Element
    if(window.innerWidth  <= widthWindow ){
        if(window.scrollY >= document.querySelector(".skill_page").offsetTop +700){
            document.querySelectorAll(".skill_page .skillBord span").forEach((el, index)=>{
                index == 0 ? el.classList.add("one"):
                index == 1 ? el.classList.add("two"):
                index == 2 ? el.classList.add("three"):
                el.classList.add("four")
            })
            document.querySelectorAll(".skillNum").forEach((el)=>{
                let goal = el.dataset.goal
                let count =0 
                let counter = setInterval(()=>{
                    el.innerHTML = `${count}%`
                    if(count == goal){
                    clearInterval(counter)
                }
                count++ 
                },20)
                
            })
        }else{
            document.querySelectorAll(".skill_page .skillBord span").forEach((el, index)=>{
                el.classList = []
            })
        }
    }else{
        if(window.scrollY >= document.querySelector(".skill_page").offsetTop ){
            document.querySelectorAll(".skill_page .skillBord span").forEach((el, index)=>{
                index == 0 ? el.classList.add("one"):
                index == 1 ? el.classList.add("two"):
                index == 2 ? el.classList.add("three"):
                el.classList.add("four")
            })
            document.querySelectorAll(".skillNum").forEach((el)=>{
                let goal = el.dataset.goal
                let count =0 
                let counter = setInterval(()=>{
                    el.innerHTML = `${count}%`
                    if(count == goal){
                    clearInterval(counter)
                }
                count++ 
                },20)
                
            })
        }else{
            document.querySelectorAll(".skill_page .skillBord span").forEach((el, index)=>{
                el.classList = []
            })
        }
    }
// // end Moving Skills Element
}
// End header when scroll
// Start land_page
let LandPa = document.querySelector(".land_page")
let liAct = document.querySelectorAll("ul li a")
let spanAct = document.querySelectorAll(".circle span")

let buttonLe = document.querySelector(".left")
let buttonRi = document.querySelector(".right")

let img = ["01.jpg","02.png","03.jpg","04.jpg","05.jpg"]
const spanActArr = Array.from(spanAct);

function randomBack() {
    let count = 0
    setInterval(()=>{
    spanActArr.forEach((el, index) => {

    el.onclick = function() {
        const clickedIndex = spanActArr.indexOf(el);
        count= clickedIndex

        spanAct.forEach((el)=>{
            el.classList.remove("active")
        })
        el.classList.add("active")
        LandPa.style.backgroundImage = `url("../img/`+img[clickedIndex] +`")`
    }
    });
    buttonLe.onclick = function(){
        spanAct.forEach((el)=>{
        el.classList.remove("active")
        })
        spanAct[count].classList.add("active")
        LandPa.style.backgroundImage = `url("../img/`+img[count] +`")`
        if(count == 0){
            count = img.length 
        }
        count--
    }
    buttonRi.onclick = function(){
        spanAct.forEach((el)=>{
        el.classList.remove("active")
        })
        spanAct[count].classList.add("active")
        LandPa.style.backgroundImage = `url("../img/`+img[count] +`")`
        count++
        if(count==img.length){
        count=0
        }
    }
    spanAct.forEach((el)=>{
    el.classList.remove("active")
    })
    spanAct[count].classList.add("active")

    LandPa.style.backgroundImage = `url("../img/`+img[count] +`")`
    count++
    if(count==img.length){
        count=0
    }
    },5000)
}
randomBack() 
// End land_page
