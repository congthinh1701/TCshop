function RenderThongTinDonHang() {
    var list = []
    //var listName=[]
    
    render = '';
    const getKey = createStorage('ThongTinToanBoDonHang')
    const getData = getKey.get('ThongTinToanBoDonHang')
    const getKeyThongTinDangNhap = createStorage('ThongTinDangNhap')
    const ThongTinDangNhap = getKeyThongTinDangNhap.get('ThongTinDangNhap')
    for (var i in ThongTinDangNhap) {
        var EmailDangNhap = ThongTinDangNhap[i].email
    }  

    const listEmail = getData.filter(function (data) {
        return data.email
    }) 
    //  kiểm tra thông tin đang nhập có trùng với thông tin mua hàng hay ko,nếu ko thì ko in ra
        for (var i in listEmail){
            if (listEmail[i].email === EmailDangNhap){
                RenderHTML()
            }
        }

    function RenderHTML(){
        var EmailDonHang=getData.find(function (data) {
            if (EmailDangNhap === data.email)
                console.log(data)
                return data.email        
        })
        //console.log(EmailDonHang.email)
        for(var i in getData){
            var a= getData[i].email
    
        }  
        console.log(EmailDonHang)
        
        for (var i in getData) {
            var [address, name, total] = getData
            
        }
        list.push({ address: address.address }, { tong:total.total })
        //console.log(list)
        var data = Object.assign(list[0], list[1])
        
        render = ' <td data-label="Địa chỉ">' + data.address + '</td>\n' +
            '                        <td data-label="Tổng đơn hàng">' + data.total + 'VND</td>\n' +
            '                        ';
        document.getElementById('table').innerHTML += render;
    }  

}

RenderThongTinDonHang()



function RenderThongTaiKhoan() {
    render = '';
    renderLoiChao = ''
    const getKey = createStorage('ThongTinToanBoDonHang')
    const getData = getKey.get('ThongTinToanBoDonHang')
    const getKeyThongTinDangNhap = createStorage('ThongTinDangNhap')
    const ThongTinDangNhap = getKeyThongTinDangNhap.get('ThongTinDangNhap')

    for (var i in ThongTinDangNhap) {
        var EmailDangNhap = ThongTinDangNhap[i].email
    }  

    const listEmail = getData.filter(function (data) {
        return data.email
    })
    function taikhoan() {
        for (var i in listEmail) {
            var a = listEmail[i]
            //console.log(listEmail[i])
            if (listEmail[i].email === EmailDangNhap) {
                render = ' <p><span>Họ tên: </span>' + a.fullname + '</p>\n' +
                    '                <p class="Email"><span>Email: </span>' + a.email + '</p>\n' +
                    '                <p><span>Điện thoại: </span>' + a.number + '</p>\n' +
                    '                <p><span>Địa chỉ: </span>' + a.address + '</p>';
                document.getElementById('thong-tin').innerHTML += render
                renderLoiChao = '<p>Xin chào, <span>' + a.fullname + ' !</span></p>';
                document.getElementById('hello').innerHTML += renderLoiChao;
                break
            }   
        }
    }
    taikhoan()
}
RenderThongTaiKhoan()


function tabs() {
    const all = document.querySelectorAll.bind(document)
    const panes = all('.right')
    const allTtem = document.querySelectorAll('.left')
    allTtem.forEach(function (tab, index) {
        const pane = panes[index]
        tab.onclick = function () {
            tab.parentElement.querySelector('.left.active').classList.remove('active')
            pane.parentElement.querySelector('.right.active').classList.remove('active')
            tab.classList.add('active')
            pane.classList.add('active')
        }
    })
}
tabs()