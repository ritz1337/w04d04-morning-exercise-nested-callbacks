/*
   Goal of this exercise is to learn nested callbacks.
*/

//require fs

// var fs = require('fs');

// //broken
// fs.readFile('./file1.txt', 'utf-8', function(err, data) {
//   if (err) throw err;
//   var file1 = data;
//   var file4content = file1;
//   // console.log(file1);
//   fs.readFile('./file2.txt', 'utf-8', function(err, data) {
//     if (err) throw err;
//     var file2 = data;
//     file4content = file4content + file2;
//     // console.log(file4content);
//     fs.readFile('./file3.txt', 'utf-8', function(err, data) {
//       if (err) throw err;
//       var file3 = data;
//       file4content = file4content + file3;
//       console.log(file4content);
//     })
//   })
//   // console.log(file4content);
//   fs.writeFile('file4.txt', file4content, function(err,data) {
//     if (err) throw err;
//     console.log('Concatenated file1.txt, file2.txt, file3.txt into file4.txt.');
//   })
//   // // fs.readFile('./file4.txt', 'utf-8, )
// })

// // Using multiple readFiles [wrong]:
// var file1 = '';
// var file2 = '';
// var file3 = '';

// fs.readFile('./file1.txt', 'utf-8', function(err, data) {
//   if (err) throw err;
//   file1 = data;
//   console.log(file1);
// })
// fs.readFile('./file2.txt', 'utf-8', function(err, data) {
//     if (err) throw err;
//     file2 = data;
//     console.log(file2);
// })

// fs.readFile('./file3.txt', 'utf-8', function(err, data) {
//     if (err) throw err;
//     file3 = data;
//     console.log(file3);
// })

// fs.writeFile('file4.txt', file1 + file2 + file3, function(err, data) {
//   if (err) throw err;

// })

// Solution 1:

var fs = require('fs');

fs.readFile('./file1.txt', 'utf-8', function(err, data1) {
  if(err) throw err;
  fs.readFile('./file2.txt', 'utf-8', function(err, data2) {
    if(err) throw err;
    fs.readFile('./file3.txt', 'utf-8', function(err, data3) {
      if(err) throw err;
      var data4 = data1 + data2 + data3;
        fs.writeFile('file4.txt', data4, function(err, data){
          console.log('Concatenated file1.txt, file2.txt, file3.txt into file4.txt.');
          fs.readFile('./file4.txt', 'utf-8', function(err, data){
            var f4data = data;
            fs.writeFile('file5.txt', f4data, function(err, data){
              console.log('File4 content was copied over to file5')
            })
          })
        })
    })
  })
})


//read file1
    //read file2
        //read file3
          //join file1, fil2 and file3 contents
          //write to file4
              // console.log('Concatenated file1.txt, file2.txt, file3.txt into file4.txt.');
              //read file4
                //write file5
                  // console.log('File4 content was copied over to file5')

