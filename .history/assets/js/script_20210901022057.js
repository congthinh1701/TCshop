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
    const oneItem=document.querySelector('.tab-item')
    const allItem=document.querySelectorAll('.tab-item')
    const onePances=document.querySelector('.tab-item')
    const allPances=document.querySelectorAll('.tab-item')
   
    
allItem.forEach(function(tab,index){
    const pane=allPances[index]
    tab.onclick=function(){
        //var papa=document.querySelector(this);
        //console.log(this.parentElement)
        var parent=this.parentElement
        console.log(parent)
        
        tab.classList.remove('.active')
        //allPances.classList.remove('active');
        this.classList.add('active')
        pane.classList.add('active')
        
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





