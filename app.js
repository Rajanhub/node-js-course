console.log('Starting the app');

const fs = require('fs');
const os = require('os');
const note = require('./note.js');

var res = note.addNote();
 console.log(res);



//var user = os.userInfo();
//fs.appendFileSync('greeting.txt',`hello ${user.username}! tou are ${note.age}`);


