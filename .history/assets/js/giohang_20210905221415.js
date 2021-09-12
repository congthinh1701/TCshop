

const cart=[];
//Lưu card vào local
Save('Giohang',cart)

function addCard(id){
    var kiemtratontaitrongcard=false;
    const getKey=createStorage('listTong')
    const getData=getKey.get('listTong')
    const getKeyCart=createStorage('Giohang')
    const getDataCart=getKeyCart.get('Giohang')
    for (var i in getDataCart){
        if (getDataCart[i].id == id){
            getDataCart[i].count++;
            Save('Giohang',cart)
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
    
}
addCard()

