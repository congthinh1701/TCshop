

const cart=[];
//Lưu card vào local
Save('Giohang',cart)
function addCard(id){
    var kiemtratontaitrongcard=false;
    const getKey=createStorage('listTong')
    const getData=getKey.get('listTong')
    for (var i in cart){
        if (cart[i].id == id){
            cart[i].count++;
            kiemtratontaitrongcard=true
        }
    }
    if (kiemtratontaitrongcard==false){
        for (var i in getData){
            if (getData[i].id==id){
                cart.push(getData[i])
            }
        }
    }
    Save('Giohang',cart)
}

addCard()
