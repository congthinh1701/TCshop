var card=[];

function addCard(id){
    alert('tt' + id);
    var kiemtratontaitrongcard=false;
    const getKey=createStorage('listNam')
    const getData=getKey.get('listNam')
    for (var i=0;i<card.length;i++){
        if (card[i].id == id){
            count++;
        }
    }
}
addCard()
