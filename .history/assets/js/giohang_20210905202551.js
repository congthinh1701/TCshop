const { count } = require("console");

var card=[];

function addCard(id){
    alert('tt' + id);
    var kiemtratontaitrongcard=false;
    const getKey=createStorage('listNam')
    const getData=getKey.get('listNam')
    for (var i=0;i<card.length;i++){
        count={count:1}
        card.push(count)
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
    }
    console.log(card)
}
addCard()
