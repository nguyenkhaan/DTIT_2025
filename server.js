const express = require('express') 
const path = require('path');
const server = express() 

server.use(express.static(path.join(__dirname, '.')));
server.use(express.json());

server.get('/' , (req , res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})


//Src: Chat GPT
const fs = require('fs');

/**
 * Ghi một mảng object vào file dưới dạng JSON.
 * @param {Array<Object>} array - Mảng chứa các object.
 * @param {string} filePath - Đường dẫn đến file (ví dụ: 'output.txt').
 */
function writeArrayToFile(array, filePath) {
  const data = JSON.stringify(array, null, 2); // Format JSON đẹp
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error(`Lỗi khi ghi vào file ${filePath}:`, err);
    } else {
      console.log(`Đã ghi mảng object vào file ${filePath}`);
    }
  });
}


server.post('/' , (req , res) => {
    const data = req.body; 
    console.log(data); 
    writeArrayToFile(data , './logStory.txt'); 
    res.json('Ghi thanh cong')
})

server.listen(3000, () => {
    console.log('Server chạy tại http://localhost:3000');
  });