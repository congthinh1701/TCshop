$('.owl-carousel').owlCarousel({
    loop:true,
    margin:43,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    stagePadding:20,
    autoplayHoverPause:true,
    navText: ["<img src='prev.png'>","<img src='next.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2,

        },
        1000:{
            items:3
        }
    }
})

//Tab -Ui
const one=document.querySelector.bind(document)
const all=document.querySelectorAll.bind(document)
const tabs=all('.tab-item')
const panes=all('.tab-pane')

tabs.forEach(function(tab,index){
    tab.onclick=function(){
        this.classList.add('active')
        
    }
})

