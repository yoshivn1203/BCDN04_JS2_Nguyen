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
    Number(document.getElementById('soThuNhat').value) +
    Number(document.getElementById('soThuHai').value) +
    Number(document.getElementById('soThuBa').value) +
    Number(document.getElementById('soThuTu').value) +
    Number(document.getElementById('soThuNam').value);

  document.getElementById('trungBinh').innerHTML = tong / 5;
};

document.getElementById('btnQuyDoi').onclick = function () {
  let tienUsd = document.getElementById('usd').value;
  tienViet = new Intl.NumberFormat('vn-VN').format(23500 * tienUsd);
  document.getElementById('quyDoi').innerHTML = tienViet;
};

document.getElementById('btnTinh').onclick = function () {
  var chieuRong = document.getElementById('chieuRong').value;
  chieuCao = document.getElementById('chieuCao').value;

  dienTich = chieuRong * chieuCao;
  chuVi = 2 * (Number(chieuRong) + Number(chieuCao));

  document.getElementById(
    'tinh'
  ).innerHTML = `Diện tích: ${dienTich}; Chu vi: ${chuVi}`;
};
