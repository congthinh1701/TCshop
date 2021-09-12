function RenderThongTinDonHang(){
    var list=[]
    //var listName=[]
    render='';
    const getKey=createStorage('ThongTinToanBoDonHang')
    const getData=getKey.get('ThongTinToanBoDonHang')
    for (var i in getData) {
        var [address,name,total] = getData
    }
    list.push({address:address.address},{total:total.total})

    for (var i in list) {
        var data = list[i]
        render =' <td data-label="Due Date">\n'+
        '                            <p>'+data.address+'</p>\n'+
        '                        </td>\n'+
        '                        <td data-label="Period">'+data.address+'</td>\n'+
        '                        <td data-label="Period">'+data.address+'</td>';
        document.getElementById('table').innerHTML+=render;
    }
    
}

RenderThongTinDonHang()



function tabs(){
    const all=document.querySelectorAll.bind(document)
    const panes=all('.right')
    const allTtem=document.querySelectorAll('.left')  
allTtem.forEach(function(tab,index){
    const pane=panes[index]
    tab.onclick=function(){   
        tab.parentElement.querySelector('.left.active').classList.remove('active')
        pane.parentElement.querySelector('.right.active').classList.remove('active')
        tab.classList.add('active')      
        pane.classList.add('active')   
    }
})
}
tabs()