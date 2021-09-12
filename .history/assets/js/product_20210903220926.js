var listDeal=[
    {   
        id:6,
        class:'countdown',
        name: 'QUẦN KAKI ỐNG SUÔNG NIKE',
        price:400000,
        img:"assets/img/bosutapnam/kaki.jpg",
    },
    {
        id:7,
        class:'countdown1',
        name: 'QUẦN VẢI ỐNG SUÔNG NIKE',
        price:600000,
        img:"assets/img/bosutapnam/quanvai.jpg",
    }
]
var Deal=function(){
    for (var i in listDeal){
        var data = listDeal[i]  
            render="";
            render= '<div class="deal-products-card">\n'+
            '                    <div class="deal-products-card-left">\n'+
            '                        <p class="name">'+data.name+'</p>\n'+
            '                        <p class="price">'+data.price+'</p>\n'+
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