const app = require('./app');

//const app = require('./app');
async function main(){
    await app.listen(3000);
    console.log('server is running');
}

main();

//app.listen(3000, () => console.log('server on port 3000'));