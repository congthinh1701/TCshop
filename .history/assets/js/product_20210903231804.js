
//HÀM LƯU VÀ LẤY DỮ LIỆU TỪ LOCAL
function createStorage(key){
    const store=JSON.parse(localStorage.getItem(key)) ?? {}
    const save = () =>{
        localStorage.setItem(key, JSON.stringify(store))
    }
    const storage={
        get(key){
            return (store)
        },
        set(key, value){
            store[key] = value
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
const savelistDeal
// Đẩy sản phẩm vào mảng
function Save(){
    localStorage.setItem('list',JSON.stringify(listDeal))
}
Save()
//lấy sản phẩm 
function load(){
    product = JSON.parse(localStorage.getItem('listProduct'));
}
//xuất sản phẩm ra html
if (localStorage.getItem("listProduct") != null) {
load();
}
if (localStorage.getItem("listProduct") == null) {
Save();
}
var Deal=function(){
    for (var i in listDeal){
        var data = listDeal[i]  
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