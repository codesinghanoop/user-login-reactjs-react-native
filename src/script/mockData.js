var fs = require('fs');
var path = require('path');

//Script is to add user
export function addNewUser(userName, password) {
  fs.readFile(path.join(__dirname, '../userList.json'), (err, data) => {
    if (err) {
      throw err;
    }

    var userList = JSON.parse(data);
    //   var dependencies = userList.dependencies;
    //   userList = JSON.stringify(userList);

    fs.writeFile(path.join(__dirname, '../userList.json'), userList, err => {
      if (err) {
        throw err;
      }
      console.log('The file has been saved!', err);
    });
  });
}
