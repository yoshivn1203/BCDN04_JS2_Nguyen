document.getElementById('btnTinhLuong').onclick = function () {
  let tienLuong =
    document.getElementById('luongNgay').value *
    document.getElementById('soNgay').value;

  document.getElementById('tienLuong').innerHTML = new Intl.NumberFormat(
    'vn-VN'
  ).format(tienLuong);
};
document.getElementById('btnTrungBinh').onclick = function () {
  let tong =
    parseInt(document.getElementById('soThuNhat').value) +
    parseInt(document.getElementById('soThuHai').value) +
    parseInt(document.getElementById('soThuBa').value) +
    parseInt(document.getElementById('soThuTu').value) +
    parseInt(document.getElementById('soThuNam').value);

  document.getElementById('trungBinh').innerHTML = tong / 5;
};
