

var card=[];

function addCard(id){
    var kiemtratontaitrongcard=false;
    const getKey=createStorage('listNam')
    const getData=getKey.get('listNam')
    console.log(getData)
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
}
//addCard()
function add(key){
    var a=JSON.parse(localStorage.getItem(key))
    console.log(a)
}
add('listNu','listNam')