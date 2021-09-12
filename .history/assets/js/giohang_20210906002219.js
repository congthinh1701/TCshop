

//Lưu card vào local
//Save('Giohang',cart)
function luuGioHang(){
    localStorage.setItem('Giohang',JSON.stringify([]));
}

function Taodoituongitemgiohang(idSanPham,name,count){
    var itemgiohang=new Object()
        itemgiohang.idSanPham=idSanPham;
        itemgiohang.name=name
        itemgiohang.count=count;
        return itemgiohang;
}
    
function addCard(id){
    //Save('Giohang',cart)
    //alert('fdf'+idsanpham)

    var kiemtratontaitrongcard=false;
    const getKey=createStorage('listTong')
    const getData=getKey.get('listTong')
    const getKeyCart=createStorage('Giohang')
    const getDataCart=getKeyCart.get('Giohang')
    for (var i in getDataCart) {
        if (getDataCart[i].id == id){
            getDataCart[i].count++;
            kiemtratontaitrongcard=true
        }
    }
    if(kiemtratontaitrongcard==false){
        for (var i in getData){
            if (getData[i].id==id){
                getDataCart.push(getData[i])       
            }     
        }
    }
    //luuGioHang() 
    Save('Giohang',getDataCart)
    //console.log(cart)
}

function taodoituongitemgiohang(){

}

var CountGioHang=function(){
    const keyGioHang=createStorage('Giohang')
    const getDataGiohang=keyGioHang.get('Giohang')
    const data =getDataGiohang.length 
    render=''
    render=' <div class="count-card">\n'+
    '                        <p style="text-align: center;">'+getDataGiohang.length+'</p>\n'+
    '                    </div>';
    document.getElementById('cart').innerHTML+=render
}

CountGioHang()