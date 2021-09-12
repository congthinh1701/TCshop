var card=[];

function addCard(id){
    var kiemtratontaitrongcard=f
    const getKey=createStorage('listNam')
    const getData=getKey.get('listNam')
    for (var i in getData){
        if (getData[i].id==id){
            card.push(getData[i])
        }
    }
}
addCard()
console.log(card)