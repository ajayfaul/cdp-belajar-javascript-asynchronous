// memanfaatkan multi-thread dengan setTimeout
// faktanya javascript itu single-thread

// console.log('Bakal muncul pertama')

// setTimeout(() => {
//     console.log('Ini udah masuk memory proses tapi dijalankan setelah 3 detik kedepan')
// },3000)

// console.log('Bakal muncul terakhir')

// contoh callback hell di javascript
// setTimeout(function() {
//     document.body.style.backgroundColor = 'red';
// }, 1000);

// setTimeout(function() {
//     document.body.style.backgroundColor ='yellow';
// }, 3000);

// setTimeout(function() {
//     document.body.style.backgroundColor ='green';
// }, 5000);

setTimeout(() => {
    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
        document.body.style.backgroundColor = 'yellow';
        setTimeout(() => {
            document.body.style.backgroundColor = 'green';
            setTimeout(() => {
                document.body.style.backgroundColor = 'blue';
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)