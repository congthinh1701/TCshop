
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
          name: 'Quần jean dài nổi bật 1',
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



    render="";
    //var [a, ...rest]=listProduct
    //console.log(a)
    for (var i in listProduct){
        var [productMan1, ...productManAll]=listProduct[i]
    }
    function 
    render = '<div class="productMan-left">\n'+
    '                        \n'+
    '                            <div class="productMan-left-img">\n'+
    '                                <img src="'+productMan1.img+'">\n'+
    '                                <div class="overlay">\n'+
    '                                    <div class="overlay-button">\n'+
    '                                        <a href="#"><button type="button" class="btn btn-secondary" style="margin-right: 50px;">Xem sản phẩm</button></a>\n'+
    '                                        <a href="#"><button type="button" class="btn btn-secondary">Add to card</button></a>\n'+
    '                                      \n'+
    '                                    </div>\n'+
    '                                </div>    \n'+
    '                            </div>                       \n'+
    '                            <div>\n'+
    '                                <p class="nameProduct" >'+productMan1.name+'</p>\n'+
    '                                <p class="price">'+productMan1.price+' đ</p>                           \n'+
    '                            </div>\n'+
    '                        \n'+
    '                               \n'+
    '                    </div>';
    document.getElementById('sanphamNam').innerHTML+=render;
    
    






