// memanfaatkan multi-thread dengan setTimeout
// faktanya javascript itu single-thread

console.log('Bakal muncul pertama')

setTimeout(() => {
    console.log('Ini udah masuk memory proses tapi dijalankan setelah 3 detik kedepan')
},3000)

console.log('Bakal muncul terakhir')