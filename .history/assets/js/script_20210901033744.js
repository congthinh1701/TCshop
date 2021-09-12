
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


function tabs(){
   
    const all=document.querySelectorAll.bind(document)
    const panes=all('.tab-pane')
    const oneItem=document.querySelector('.tab-item')
    const allTtem=document.querySelectorAll('.tab-item')
    const onePanes=document.querySelector('.panes')
    const allpanes=document.querySelectorAll('.panes')
allTtem.forEach(function(tab,index){
    const pane=panes[index]
    tab.onclick=function(){
        
        tab.parentElement.querySelector('.tab-item.active').classList.remove('active')
        pane.parentElement.querySelector('.tab-pane.active').classList.remove('active')
        tab.classList.add('active')
        
        pane.classList.add('active')
        
    }
})
}
tabs()





