var card=[];

function addCard(id){
    var kiemtratontaitrongcard=false;
    const getKey=createStorage('listNam')
    const getData=getKey.get('listNam')
    for (var i=0i<; in getData){
        if (getData[i].id==id){
            card.push(getData[i])

        }
    }
}
addCard()
console.log(card)