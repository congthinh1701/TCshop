var card=[];

function addCard(id){
    alert('tt' + id);
    var kiemtratontaitrongcard=false;
    const getKey=createStorage('listNam')
    const getData=getKey.get('listNam')
    for (var i=0;i<getData.length;i++){
        if (getData[i].id == id){
            card.push(getData[i])
        }
    }
    console.log(card)
}
addCard()
