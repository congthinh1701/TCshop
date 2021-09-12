
function RenderThongTinDatHang(){
    
    var DanhSachSanPham=LayDanhSachItemGioHangDayDuDoiTuongTheoId()
    for (var i in DanhSachSanPham){
        console.log(DanhSachSanPham[i])
    }
}
RenderThongTinDatHang()