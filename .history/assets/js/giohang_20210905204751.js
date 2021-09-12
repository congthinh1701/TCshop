

var card=[];

function addCard(id,th){
    alert('tt' + id);
    var kiemtratontaitrongcard=false;
    const getKey=createStorage(th)
    const getData=getKey.get(th)
    console.log(getData)
    /*for (var i in card){
        if (card[i].id == id){
            card[i].count++;
            kiemtratontaitrongcard=true
        }
    }
    if (kiemtratontaitrongcard==false){
        for (var i in getData){
            if (getData[i].id==id){
                card.push(getData[i])
            }
        }
    }*/
}
addCard('listNam')
