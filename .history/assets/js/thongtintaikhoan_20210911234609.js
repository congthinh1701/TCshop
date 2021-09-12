function RenderThongTinDonHang() {
    var list = []
    //var listName=[]
    render = '';
    const getKey = createStorage('ThongTinToanBoDonHang')
    const getData = getKey.get('ThongTinToanBoDonHang')
    for (var i in getData) {
        var [address, name, total] = getData
    }
    list.push({ address: address.address }, { total: total.total })

    var data = Object.assign(list[0], list[1])
    //console.log(list)
    render = ' <td data-label="Địa chỉ">' + data.address + '</td>\n' +
        '                        <td data-label="Tổng đơn hàng">' + data.total + 'VND</td>\n' +
        '                        ';
    document.getElementById('table').innerHTML += render;

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
   
    //console.log(listEmail)
    

    //console.log(listEmail)

    
    var listEmail = getData.filter(function (data) {
        return data.email
    })

    console.log(listEmail)
    var b=[]
    for (var i in listEmail) {
        b.push(listEmail[i].email)
    }
    console.log(b)
    for (var i in b){
        
    }
    


    function taikhoan() {
        for (var i in b) {
            //var a = listEmail[i]
            //console.log(listEmail[i])
            if (b[i] === EmailDangNhap) {
                for (var i in listEmail) {
                    var a = listEmail[i]
                    render = ' <p><span>Họ tên: </span>' + a.fullname + '</p>\n' +
                    '                <p class="Email"><span>Email: </span>' + a.email + '</p>\n' +
                    '                <p><span>Điện thoại: </span>' + a.number + '</p>\n' +
                    '                <p><span>Địa chỉ: </span>' + a.address + '</p>';
                document.getElementById('thong-tin').innerHTML += render
                renderLoiChao = '<p>Xin chào, <span>' + a.fullname + ' !</span></p>';
                document.getElementById('hello').innerHTML += renderLoiChao;
                break
                }
                
                break
            }
            
            else{
                console.log('dsad')
            }
        }

    }

    taikhoan()




    //console.log(listEmail)
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