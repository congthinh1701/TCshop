
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:43,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    stagePadding:20,
    autoplayHoverPause:true,
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
    const allTtem=document.querySelectorAll('.tab-item') 
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

var listProduct=[
    productMan=[
      {
          id:1,
          name: 'Quần jean dài nổi bật',
          price:880000,
          img:'assets/img/bosutapnam/nam1.jpg'
      },
      {
        id:2,
        name: 'Quần kaki New York',
        price:500000,
        img:'assets/img/bosutapnam/kaki.jpg'
      },
      {
        id:3,
        name: 'Quần vải ống suông',
        price:600000,
        img:'assets/img/bosutapnam/quanvai.jpg'
      },
      {
        id:4,
        name: 'Áo khoác kéo khóa Nike',
        price:750000,
        img:'assets/img/bosutapnam/aokhoac.jpg'
      },
      {
        id:5,
        name: 'Áo khoác có mũ Nike',
        price:500000,
        img:'assets/img/bosutapnam/aokhoac.jpg'
      }
    ]
]

var listMan=function(){
    listproduct="";
    for (var i in ){}
}




