 //const {readFileSync} = require(`fs`);

 //const first  = readFileSync(`./content/read-ex.txt` ,`utf8`) 

 //console.log(first)


 //anther way of accessing module

 const fs = require(`fs`);
  const second = fs.readFileSync(`./content/read-ex2.txt`,`utf8`) //here the "utf8" is buffer input to get the  out put in the for  of the string 

 console.log(second)

 const result = fs.writeFileSync(`./content/write-ex.txt`,`result ${second} is written succesfully `)