

const cart=[];
//Lưu card vào local
//Save('Giohang',cart)
function luuGioHang(){
    localStorage.setItem('Giohang',JSON.stringify(cart));
}

function addCard(id){
    //Save('Giohang',cart)
    //alert('fdf'+idsanpham)
    var kiemtratontaitrongcard=false;
    const getKey=createStorage('listTong')
    const getData=getKey.get('listTong')
    
    for (var i in getDataCart) {
        if (getDataCart[i].id == id){
            getDataCart[i].count++;
            kiemtratontaitrongcard=true
        }
    }
    if(kiemtratontaitrongcard==false){
        for (var i in getData){
            if (getData[i].id==id){
                cart.push(getData[i])       
            }     
        }
    }
    //luuGioHang() 
    
    console.log(getDataCart)
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