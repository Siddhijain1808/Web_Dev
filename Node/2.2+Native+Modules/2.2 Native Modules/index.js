const fs = require("fs");
fs.writeFile("message.txt", "Hello form Node.js" , (err)=>{;
if (err) throw err;
    console.log("The file has been saved");
});
