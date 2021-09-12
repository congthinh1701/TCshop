
function RenderThongTinDatHang(){
    
    const DanhSachSanPham=LayDanhSachItemGioHangDayDuDoiTuongTheoId();
    render="";
    renderCount="";
    for (var i in DanhSachSanPham){
        var data= DanhSachSanPham[i];
        render = '<div class="san-pham">\n'+
        '                        <div class="san-pham-img">\n'+
        '                            <img src="'+data.img1+'">\n'+
        '                        </div>\n'+
        '                        <div class="san-pham-name">\n'+
        '                            <p style="text-transform:lowercase;" >'+data.name+'</p>\n'+
        '                        </div>\n'+
        '                        <div class="san-pham-price">\n'+
        '                            <p >'+data.price+'đ</p>\n'+
        '                        </div>\n'+
        '                    </div>  ';
        document.getElementById('san-pham').innerHTML+=render;
    }
    renderCount=' <span>('+DanhSachSanPham.length+' sản phẩm)</span>';
    document.getElementById('count').innerHTML+=renderCount
}
RenderThongTinDatHang()

function count(){
    const DanhSachSanPham=LayDanhSachItemGioHangDayDuDoiTuongTheoId();
    console.log(DanhSachSanPham.length)
}
count()

function renderTamTinh(){
    var tong=total()
    render=""
    render='<p>Tổng tiền thanh toán: <span>'+tong+'</span></p>';
    document.getElementById('total').innerHTML+=render;
}