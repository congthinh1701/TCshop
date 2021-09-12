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
    
    var data=Object.assign(list[0],list[1])
    render=' <td data-label="Địa chỉ">'+data.address+'</td>\n'+
    '                        <td data-label="Tổng đơn hàng">'+data.total+'VND</td>\n'+
    '                        ';
    document.getElementById('table').innerHTML+=render;
    
}

RenderThongTinDonHang()

function RenderThongTaiKhoan(){
    render='';
    renderLoiChao=;
    const getKey=createStorage('ThongTinToanBoDonHang')
    const getData=getKey.get('ThongTinToanBoDonHang')
    for (var i in getData) {
        var [thongtin, ...All] = getData
    }
    render= ' <p><span>Họ tên: </span>'+thongtin.fullname+'</p>\n'+
    '                <p><span>Email: </span>'+thongtin.email+'</p>\n'+
    '                <p><span>Điện thoại: </span>'+thongtin.number+'</p>\n'+
    '                <p><span>Địa chỉ: </span>'+thongtin.address+'</p>';
    document.getElementById('thong-tin').innerHTML+=render
    renderLoiChao = '<p>Xin chào, <span>Lương Thịnh !</span></p>';
    document.getElementById('hello').innerHTML+=renderLoiChao;
}
RenderThongTaiKhoan()


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