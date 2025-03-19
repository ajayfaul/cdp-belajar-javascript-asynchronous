// async function hello() {
// }

const hello = async () => {
    // throw 'Error: Something went wrong'
    return 'Hello world'
}

hello().then((res) => {
    console.log('response', res);
}).catch((err) => {
    console.log('error', err);
})