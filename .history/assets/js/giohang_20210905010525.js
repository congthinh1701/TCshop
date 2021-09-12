var card=[];

function addCard(id){
    const getKey=createStorage('listNam')
    const getData=getKey.get('listNam')
    console.log(getData)
}
addCard()