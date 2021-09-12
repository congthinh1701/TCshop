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
    const oneItem=document.querySelector('.tab-item')
    const allTtem=document.querySelectorAll('.tab-item')
    const onePanes=document.querySelector('.panes')
    const allpanes=document.querySelectorAll('.panes')
allTtem.forEach(function(tab,index){
    const pane=panes[index]
    tab.onclick=function(){
        console.log(tab)
        if('.tab-item.active'){
            console.log('fdfd')
        }
        for(var i in a)
        tab.classList.add('active')
        //one('.tab-item.active').classList.parentElement.remove('active')
        //one('.tab-pane.active').classList.remove('active');
        //this.classList.add('active')
        //pane.classList.add('active')
        
    }
})
}
thinh()
function cong(){
    const one=document.querySelector.bind(document)
    const all=document.querySelectorAll.bind(document)
    const tabs=all('.tab-item')
    const panes=all('.tab-pane')
    tabs.forEach(function(tab,index){
        const pane=panes[index]
       
    })
}



function tabs (){
    const one=document.querySelector.bind(document)
    const all=document.querySelectorAll.bind(document)
    const onetabitem=document.querySelector.bind(document)
    const cards=all('.card')
    cards.forEach(function(card){
        card.onclick=function(){
            one('.card.active').classList.remove('active')
            this.classList.add('active');
            if('.card.active'){
                
            }
            else{
               
            }
              
        }
    })
}





