

function Taodoituongitemgiohang(id,count){
    var itemgiohang=new Object()
        itemgiohang.id=id;
        itemgiohang.count=count;
        return itemgiohang;
}

function LayDanhSachItemGioHang(){
    var DanhSachItemGioHang=new Array();
    var jsondanhsachitemgiohang=localStorage.getItem('DanhSachItemGioHang')
    if(jsondanhsachitemgiohang != null){
        DanhSachItemGioHang=JSON.parse(jsondanhsachitemgiohang)
    }
    return DanhSachItemGioHang;
}

function addCard(id){
    var kiemtratontaitronggiohang=false;
    var DanhSachItemGioHang=LayDanhSachItemGioHang();
    for (var i in DanhSachItemGioHang){
        if(DanhSachItemGioHang[i].id == id){
            DanhSachItemGioHang[i].count++;
            kiemtratontaitronggiohang=true;
        }
    }
    if(kiemtratontaitronggiohang==false){
        var ItemGioHang=Taodoituongitemgiohang(id,1)
        console.log(ItemGioHang)
        console.log(DanhSachItemGioHang)
        DanhSachItemGioHang.push(ItemGioHang)
    }
    //Lưu xuống local
    console.log(DanhSachItemGioHang)
    Save('DanhSachItemGioHang',DanhSachItemGioHang)

}

function LayDanhSachItemGioHangDayDuDoiTuongTheoId(){
    var GioHang=new Array;
        DanhSachSanPham= LayDanhSachItemGioHang();
        const getKey=createStorage('listTong')
        const getData=getKey.get('listTong')

        for (var i in DanhSachSanPham){
            for (var i in getData){
                
            }
        }
    return GioHang
}
LayDanhSachItemGioHangDayDuDoiTuongTheoId()
function addCar(id){
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