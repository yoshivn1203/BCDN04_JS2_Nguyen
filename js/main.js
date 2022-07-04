document.getElementById('btnTinhLuong').onclick = function () {
  let tienLuong =
    document.getElementById('luongNgay').value *
    document.getElementById('soNgay').value;

  document.getElementById('tienLuong').innerHTML = new Intl.NumberFormat(
    'vn-VN'
  ).format(tienLuong);
};
