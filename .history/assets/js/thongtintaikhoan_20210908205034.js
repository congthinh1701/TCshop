function RenderThongTinDonHang(){
    const render='';
    const getKey=createStorage('ThongTinToanBoDonHang')
    const getData=getKey.get('ThongTinToanBoDonHang')
    for (var i in getData) {
        const data=getData[i]
        render='<table>\n'+
        '                    <caption>Cảm ơn bạn đã sử dụng sản phẩm của chúng tôi.Chúng tôi sẽ giao hàng trong thời gian sớm nhất.</caption>\n'+
        '                    <caption>Thank you very much !</caption>\n'+
        '                    <thead>\n'+
        '                      <tr>\n'+
        '                        <th scope="col" class="header">Ảnh sản phẩm</th>\n'+
        '                        <th scope="col" class="header">Tên sản phẩm</th>\n'+
        '                        <th scope="col" class="header">Địa chỉ</th>\n'+
        '                        <th scope="col" class="header">Tổng đơn hàng</th>\n'+
        '                      </tr>\n'+
        '                    </thead>\n'+
        '                    <tbody>\n'+
        '                      <tr>\n'+
        '                        <td data-label="Account" class="img">\n'+
        '                            <p><img src="assets/img/bosutapnam/aokhoac.jpg"></p>\n'+
        '                        </td>\n'+
        '                        <td data-label="Due Date">\n'+
        '                            <p>hdjsahdjaks</p>\n'+
        '                        </td>\n'+
        '                        <td data-label="Period">03/01/2016 - 03/31/2016</td>\n'+
        '                        <td data-label="Period">03/01/2016 - 03/31/2016</td>\n'+
        '                      </tr>      \n'+
        '                    </tbody>\n'+
        '                  </table>';
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