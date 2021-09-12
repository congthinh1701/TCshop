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


function thinh(){
    const one=document.querySelector.bind(document)
    const all=document.querySelectorAll.bind(document)
    const tabs=all('.tab-item')
    const panes=all('.tab-pane')

tabs.forEach(function(tab,index){
    const pane=panes[index]
    console.log(pane)
    tab.onclick=function(){
        one('.tab-item.active').classList.remove('active')
        one('.tab-pane.active').classList.remove('active');
        this.classList.add('active')
        pane.classList.add('active')
        
    }
})
}
thinh()

function tabs (){
    const one=document.querySelector.bind(document)
    const all=document.querySelectorAll.bind(document)
    const cards=one('.card')
    cards.forEach(function(card){
        card.onclick=function()
    })
}




