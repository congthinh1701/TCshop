

var card=[];

function addCard(id){
    var kiemtratontaitrongcard=false;
    const getKey=createStorage('listTong')
    const getData=getKey.get('listTong')
    for (var i in card){
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
        card.push()
    }
    console.log(card)
}
addCard()
