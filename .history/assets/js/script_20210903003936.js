
function timedown() {
    var gio=2;
    var phut=10;
    var giay=8;
   setInterval(function() {
       giay--;
       if (giay === -1){
           phut= phut -1;
           giay=59;
       }
       if (phut === -1){
           gio= gio -1;
           phut= 59;
       }
       var thongtin=gio+"h    "+  phut  +  "m    "+  giay+ "s";
    //đưa thông tin lên web
    document.getElementById('countdown').innerHTML=thongtin
   },1000)
}
timedown()
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



var listDeal=[
    {
        name: 'QUẦN KAKI ỐNG SUÔNG NIKE',
        price:400000,
        img:"assets/img/bosutapnam/kaki.jpg",
    },
    {
        name: 'QUẦN VẢI ỐNG SUÔNG NIKE',
        price:600000,
        img:"assets/img/bosutapnam/quanvai.jpg",
    }
]
    fu

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
        img1:'assets/img/bosutapnam/kaki1.jpg',
        img2:'assets/img/bosutapnam/kaki2.jpg',
        img3:'assets/img/bosutapnam/kaki3.jpg',
      },
      {
        id:3,
        name: 'Quần vải ống suông',
        price:600000,
        img1:'assets/img/bosutapnam/quanvai1.jpg',
        img2:'assets/img/bosutapnam/quanvai2.jpg',
        img3:'assets/img/bosutapnam/quanvai3.jpg'
      },
      {
        id:4,
        name: 'Áo khoác kéo khóa Nike',
        price:750000,
        img1:'assets/img/bosutapnam/aokhoac1.jpg',
        img2:'assets/img/bosutapnam/aokhoac2.jpg',
        img3:'assets/img/bosutapnam/aokhoac3.jpg',
      },
      {
        id:5,
        name: 'Áo khoác có mũ Nike',
        price:500000,
        img1:'assets/img/bosutapnam/khoacmu1.jpg',
        img2:'assets/img/bosutapnam/khoacmu2.jpg',
        img3:'assets/img/bosutapnam/khoacmu3.jpg',
      }
    ]
]



   
    //var [a, ...rest]=listProduct
    //console.log(a)
    
    for (var i in listProduct){
        var [productMan1, ...productManAll]=listProduct[i]
    }
var  productMan=function(){
        render="";
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

    }    
//productMan()

var  productManlist=function(){
    var render="";
    for(var i in productManAll){
        var data=productManAll[i];
        render = '<div class="card">\n'+
        '                            <div class="tabs-img">\n'+
        '                               <div class="tab-pane active">\n'+
        '                                    <img class="card-img-top" src="'+data.img1+'" alt="Card image cap">\n'+
        '                                    <div class="overlay">\n'+
        '                                        <button type="button" class="btn btn-warning">Add to card</button>\n'+
        '                                    </div>\n'+
        '                               </div>\n'+
        '                               <div class="tab-pane">\n'+
        '                                    <img class="card-img-top" src="'+data.img2+'" alt="Card image cap">\n'+
        '                                    <div class="overlay">\n'+
        '                                        <button type="button" class="btn btn-warning">Add to card</button>\n'+
        '                                    </div>\n'+
        '                                </div>\n'+
        '                                <div class="tab-pane">\n'+
        '                                    <img class="card-img-top" src="'+data.img3+'" alt="Card image cap">\n'+
        '                                    <div class="overlay">\n'+
        '                                        <button type="button" class="btn btn-warning">Add to card</button>\n'+
        '                                    </div>\n'+
        '                               </div>\n'+
        '                            </div>                          \n'+
        '                            <div class="card-body">\n'+
        '                                <div class="card-body-top">\n'+
        '                                    <p class="card-title">'+data.name+'</p>\n'+
        '                                    <p class="card-price">'+data.price+'</p>\n'+
        '                                </div>                            \n'+
        '                              <div class="tabs">\n'+
        '                                <div class="tab-item active">\n'+
        '                                    <img src="'+data.img1+'">\n'+
        '                                </div>\n'+
        '                                <div class="tab-item ">\n'+
        '                                    <img src="'+data.img2+'">\n'+
        '                                </div>\n'+
        '                                <div class="tab-item ">\n'+
        '                                    <img src="'+data.img3+'">\n'+
        '                                </div>\n'+
        '                              </div>\n'+
        '                            </div>\n'+
        '                        </div>';
        document.getElementById('sanphamNamAll').innerHTML+=render
    }
}

//productManlist()


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


