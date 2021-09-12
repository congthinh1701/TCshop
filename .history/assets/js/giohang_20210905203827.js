

var card=[];

function addCard(id){
    alert('tt' + id);
    var kiemtratontaitrongcard=false;
    const getKey=createStorage(['listNam','listDeal'])
    const getData=getKey.get(['listNam','listDeal'])
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
addCard()
