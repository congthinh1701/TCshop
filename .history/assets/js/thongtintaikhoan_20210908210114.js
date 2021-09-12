function RenderThongTinDonHang(){
    render='';
    const getKey=createStorage('ThongTinToanBoDonHang')
    const getData=getKey.get('ThongTinToanBoDonHang')
    for (var i in getData) {
        const data=getData[i].img1
        console.log(data.address)
        render = '<tr>\n'+
        '                        <td data-label="Account" class="img">\n'+
        '                            <p><img src="'+data.img1+'"></p>\n'+
        '                        </td>\n'+
        '                        <td data-label="Due Date">\n'+
        '                            <p>'+data.name+'</p>\n'+
        '                        </td>\n'+
        '                        <td data-label="Period">'+data.address+'</td>\n'+
        '                        <td data-label="Period">'+data.total+'</td>\n'+
        '                      </tr>    ';
        document.getElementById('table').innerHTML+=render
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