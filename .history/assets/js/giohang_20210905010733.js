var card=[];

function addCard(id){
    const getKey=createStorage('listNam')
    const getData=getKey.get('listNam')
    for (var i in getData){
        if (getData[i].id==id){
            card.push()
        }
    }
}
addCard()