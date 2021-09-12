var listDeal=[
    {   
        id:6,
        class:'countdown',
        name: 'QUẦN KAKI ỐNG SUÔNG NIKE',
        price:400000,
        img:"assets/img/bosutapnam/kaki.jpg",
    },
    {
        id:7,
        class:'countdown1',
        name: 'QUẦN VẢI ỐNG SUÔNG NIKE',
        price:600000,
        img:"assets/img/bosutapnam/quanvai.jpg",
    }
]
var Deal=function(){
    for (var i in listDeal){
        var data = listDeal[i]  
            render="";
            render= 
    document.getElementById('deal').innerHTML+=render;
    
}
}