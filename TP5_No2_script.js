/*
<!-- Praktikum Pemrograman Web -->
<!-- Cira Alandia -->
<!-- 221051135 // Kelas D -->

Ini adalah file javascript untuk nomor 2
*/

// Bagian ini adalah bagian untuk membuat tombol-tombol kalkulator
// Setiap objek dalam array 'buttons' merepresentasikan sebuah tombol pada kalkulator yang akan dibuat.
const buttons = [
    { text: "+", class: "operator-btn", action: appendToDisplay }, // Tombol untuk penambahan
    { text: "7", action: appendToDisplay }, // Tombol angka 7
    { text: "8", action: appendToDisplay }, // Tombol angka 8
    { text: "9", action: appendToDisplay }, // Tombol angka 9
    { text: "-", class: "operator-btn", action: appendToDisplay }, // Tombol untuk pengurangan
    { text: "4", action: appendToDisplay }, // Tombol angka 4
    { text: "5", action: appendToDisplay }, // Tombol angka 5
    { text: "6", action: appendToDisplay }, // Tombol angka 6
    { text: "*", class: "operator-btn", action: appendToDisplay }, // Tombol untuk perkalian
    { text: "1", action: appendToDisplay }, // Tombol angka 1
    { text: "2", action: appendToDisplay }, // Tombol angka 2
    { text: "3", action: appendToDisplay }, // Tombol angka 3
    { text: "/", class: "operator-btn", action: appendToDisplay }, // Tombol untuk pembagian
    { text: "0", action: appendToDisplay }, // Tombol angka 0
    { text: ".", action: appendToDisplay }, // Tombol titik desimal
    { text: "=", action: calculate }, // Tombol untuk menghitung hasil perhitungan matematika.
    { text: "C", class: "operator-btn", action: clearDisplay }, // Tombol untuk menghapus isi layar kalkulator
  ];
  
  // Membuat dan menambahkan tombol-tombol ke dalam container tombol kalkulator
  const buttonsContainer = document.getElementById("buttons");
  buttons.forEach((button) => {
    const btn = document.createElement("button"); // Membuat elemen tombol baru
    btn.textContent = button.text; // Menetapkan teks tombol sesuai dengan objek pada array buttons
    if (button.class) {
      btn.classList.add(button.class); // Menambahkan kelas tambahan ke tombol jika diperlukan
    }
    btn.addEventListener("click", () => button.action(button.text)); // Menambahkan event listener ke tombol untuk memanggil fungsi yang sesuai saat tombol ditekan
    buttonsContainer.appendChild(btn); // Menambahkan tombol ke dalam container tombol kalkulator
  });
  
  // Menambahkan input ke dalam layar kalkulator
  function appendToDisplay(input) {
    display.value += input; // Menambahkan input ke layar kalkulator
  }
  
  // Menghapus isi layar kalkulator
  function clearDisplay() {
    display.value = ""; // Mengosongkan isi layar kalkulator
  }
  
  // Melakukan perhitungan matematika yang ada pada layar kalkulator
  function calculate() {
    try {
      display.value = eval(display.value); // Menghitung hasil perhitungan matematika di layar kalkulator
    } catch (error) {
      display.value = "Error"; // Menampilkan pesan error jika terjadi kesalahan dalam perhitungan
    }
  }