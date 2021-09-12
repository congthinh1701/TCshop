var card=[];

function addCard(id){
    var kiemtratontaitrongcard=false;
    const getKey=createStorage('listNam')
    const getData=getKey.get('listNam')
    for (var i=0;i<getData.length;i++){
        if (getData[i].id==id){
            card.push(getData[i])
        }
        for (var i in card){
            
        }
    }
}
addCard()
console.log(card)