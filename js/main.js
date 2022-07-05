document.getElementById('btnTinhLuong').onclick = () => {
  let tienLuong =
    document.getElementById('luongNgay').value *
    document.getElementById('soNgay').value;

  document.getElementById('tienLuong').innerHTML = new Intl.NumberFormat(
    'vn-VN'
  ).format(tienLuong);
};

document.getElementById('btnTrungBinh').onclick = () => {
  let tong =
    Number(document.getElementById('soThuNhat').value) +
    Number(document.getElementById('soThuHai').value) +
    Number(document.getElementById('soThuBa').value) +
    Number(document.getElementById('soThuTu').value) +
    Number(document.getElementById('soThuNam').value);

  document.getElementById('trungBinh').innerHTML = tong / 5;
};

document.getElementById('btnQuyDoi').onclick = () => {
  let tienUsd = document.getElementById('usd').value;
  tienViet = new Intl.NumberFormat('vn-VN').format(23500 * tienUsd);
  document.getElementById('quyDoi').innerHTML = tienViet;
};

document.getElementById('btnTinh').onclick = () => {
  let chieuRong = document.getElementById('chieuRong').value;
  chieuCao = document.getElementById('chieuCao').value;

  dienTich = chieuRong * chieuCao;
  chuVi = 2 * (Number(chieuRong) + Number(chieuCao));

  document.getElementById(
    'tinh'
  ).innerHTML = `Diện tích: ${dienTich}; Chu vi: ${chuVi}`;
};

document.getElementById('btnTinhTong').onclick = () => {
  let number = document.getElementById('number').value,
    hangChuc = Math.floor(number / 10),
    hangDonvi = number % 10;
  document.getElementById('tinhTong').innerHTML = hangChuc + hangDonvi;
};
