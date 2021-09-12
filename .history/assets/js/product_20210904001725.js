// Lưu
function Save(key,value) {
    localStorage.setItem(key,JSON.stringify(value))
}
//HÀM LẤY DỮ LIỆU TỪ LOCAL VÀ CẬP NHẬT
function createStorage(key){
    const store=JSON.parse(localStorage.getItem(key)) ?? {}
    const save = () =>{
        localStorage.setItem(key, JSON.stringify(store))
    }
    const storage={
        get(key){
            return (store)
        },
        set( value){
            store = value
            save()
        },
        remove(key){
            delete store[key]
            save()
        },
    }
    return storage
}
var listDeal=[
    {   
        id:1,
        class:'countdown',
        name: 'QUẦN KAKI ỐNG SUÔNG NIKE',
        price:400000,
        img:"assets/img/bosutapnam/kaki.jpg",
    },
    {
        id:2,
        class:'countdown1',
        name: 'QUẦN VẢI ỐNG SUÔNG NIKE',
        price:600000,
        img:"assets/img/bosutapnam/quanvai.jpg",
    }
]
//Lưu vào localStorage
Save('listDeal',listDeal)


//RENDER RA HTML

var Deal=function(){
    const getKey=createStorage('listDeal')
    const getData=getKey.get('listDeal')
    for (var i in getData){
        var data = getData[i]  
            render="";
            render= '<div class="deal-products-card">\n'+
            '                    <div class="deal-products-card-left">\n'+
            '                        <p class="name">'+data.name+'</p>\n'+
            '                        <p class="price">'+data.price+' đ</p>\n'+
            '                        <p class="time"> Thời gian còn lại: <span class="'+data.class+'"></span></p>                       \n'+
            '                        <button type="button"><i class="fas fa-shopping-cart"></i><p>MUA NGAY</p></button>\n'+
            '                    </div>\n'+
            '                    <div class="deal-products-card-right">\n'+
            '                        <img src="'+data.img+'" width="100%" height="100%">\n'+
            '                    </div>\n'+
            '                </div>';
    document.getElementById('deal').innerHTML+=render;
    
    }
}
Deal()


//LƯU BỘ SƯU TẬP NAM

var listBosuutapNam=[
    {
        id:3,
        name: 'Quần jean dài nổi bật ',
        price:880000,
        img:'assets/img/bosutapnam/nam1.jpg'
    },
    {
      id:4,
      name: 'Quần kaki New York',
      price:500000,
      img1:'assets/img/bosutapnam/kaki1.jpg',
      img2:'assets/img/bosutapnam/kaki2.jpg',
      img3:'assets/img/bosutapnam/kaki3.jpg',
    },
    {
      id:5,
      name: 'Quần vải ống suông',
      price:600000,
      img1:'assets/img/bosutapnam/quanvai1.jpg',
      img2:'assets/img/bosutapnam/quanvai2.jpg',
      img3:'assets/img/bosutapnam/quanvai3.jpg'
    },
    {
      id:6,
      name: 'Áo khoác kéo khóa Nike',
      price:750000,
      img1:'assets/img/bosutapnam/aokhoac1.jpg',
      img2:'assets/img/bosutapnam/aokhoac2.jpg',
      img3:'assets/img/bosutapnam/aokhoac3.jpg',
    },
    {
      id:7,
      name: 'Áo khoác có mũ Nike',
      price:500000,
      img1:'assets/img/bosutapnam/khoacmu1.jpg',
      img2:'assets/img/bosutapnam/khoacmu2.jpg',
      img3:'assets/img/bosutapnam/khoacmu3.jpg',
    }
  
]


var [productManOne, ...productManAll]=listBosuutapNam

var productMan=function(){
      var data = productManOne
          render="";
          render = '<div class="productMan-left-img">\n'+
          '                                    <img src="'+data.img+'">\n'+
          '                                    <div class="overlay">\n'+
          '                                        <div class="overlay-button">\n'+
          '                                            <a href="#"><button type="button" class="btn btn-secondary" style="margin-right: 50px;">Xem sản phẩm</button></a>\n'+
          '                                            <a href="#"><button type="button" class="btn btn-secondary">Add to card</button></a>\n'+
          '                                          \n'+
          '                                        </div>\n'+
          '                                    </div>    \n'+
          '                                </div>                       \n'+
          '                                <div>\n'+
          '                                    <p class="nameProduct" >'+data.name+'</p>\n'+
          '                                    <p class="price">'+data.price+'</p>                           \n'+
          '                                </div>   ';
      document.getElementById('sanphamNam-left').innerHTML+=render;
  }
    
productMan()

var productManlist=function(){
  var render="";
  for(var i in productManAll){
      var data=productManAll[i];
      render = '<div class="card">\n'+
      '                                <div class="tabs-img">\n'+
      '                                   <div class="tab-pane active">\n'+
      '                                        <img class="card-img-top" src="'+data.img1+'" alt="Card image cap">\n'+
      '                                        <div class="overlay">\n'+
      '                                            <button type="button" class="btn btn-warning">Add to card</button>\n'+
      '                                        </div>\n'+
      '                                   </div>\n'+
      '                                   <div class="tab-pane">\n'+
      '                                        <img class="card-img-top" src="'+data.img2+'" alt="Card image cap">\n'+
      '                                        <div class="overlay">\n'+
      '                                            <button type="button" class="btn btn-warning">Add to card</button>\n'+
      '                                        </div>\n'+
      '                                    </div>\n'+
      '                                    <div class="tab-pane">\n'+
      '                                        <img class="card-img-top" src="'+data.img3+'" alt="Card image cap">\n'+
      '                                        <div class="overlay">\n'+
      '                                            <button type="button" class="btn btn-warning">Add to card</button>\n'+
      '                                        </div>\n'+
      '                                   </div>\n'+
      '                                </div>                          \n'+
      '                                <div class="card-body">\n'+
      '                                    <div class="card-body-top">\n'+
      '                                        <p class="card-title">'+data.name+'</p>\n'+
      '                                        <p class="card-price">'+data.price+'</p>\n'+
      '                                    </div>                            \n'+
      '                                  <div class="tabs">\n'+
      '                                    <div class="tab-item active">\n'+
      '                                        <img src="'+data.img1+'">\n'+
      '                                    </div>\n'+
      '                                    <div class="tab-item ">\n'+
      '                                        <img src="'+data.img2+'">\n'+
      '                                    </div>\n'+
      '                                    <div class="tab-item ">\n'+
      '                                        <img src="'+data.img3+'">\n'+
      '                                    </div>\n'+
      '                                  </div>\n'+
      '                                </div>\n'+
      '                            </div>';
      document.getElementById('sanphamNam-right').innerHTML+=render
  }
}
productManlist()

//LƯU BỘ SƯU TẬP NỮ

var listBosuutapNam=[
    {
        id:8,
        name: 'Quần jean dài nổi bật ',
        price:880000,
        img:'assets/img/bosutapnam/nam1.jpg'
    },
    {
      id:4,
      name: 'Quần kaki New York',
      price:500000,
      img1:'assets/img/bosutapnam/kaki1.jpg',
      img2:'assets/img/bosutapnam/kaki2.jpg',
      img3:'assets/img/bosutapnam/kaki3.jpg',
    },
    {
      id:5,
      name: 'Quần vải ống suông',
      price:600000,
      img1:'assets/img/bosutapnam/quanvai1.jpg',
      img2:'assets/img/bosutapnam/quanvai2.jpg',
      img3:'assets/img/bosutapnam/quanvai3.jpg'
    },
    {
      id:6,
      name: 'Áo khoác kéo khóa Nike',
      price:750000,
      img1:'assets/img/bosutapnam/aokhoac1.jpg',
      img2:'assets/img/bosutapnam/aokhoac2.jpg',
      img3:'assets/img/bosutapnam/aokhoac3.jpg',
    },
    {
      id:7,
      name: 'Áo khoác có mũ Nike',
      price:500000,
      img1:'assets/img/bosutapnam/khoacmu1.jpg',
      img2:'assets/img/bosutapnam/khoacmu2.jpg',
      img3:'assets/img/bosutapnam/khoacmu3.jpg',
    }
  
]


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