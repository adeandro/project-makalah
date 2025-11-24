function konfirmasi(){
  let nama = document.getElementById("nama").value;
  let asal = document.getElementById("asal").value;

  if(nama === "" || asal === ""){
    alert("Isi dulu semua datanya!");
    return;
  }

  // simpan data agar bisa dipakai di halaman berikutnya
  localStorage.setItem("nama", nama);
  localStorage.setItem("asal", asal);

  // pindah halaman
  window.location.href = "az.html";
}