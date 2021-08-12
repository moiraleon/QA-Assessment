const express = require('express')
const path = require('path')

const app = express()

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../tictacjs.html'));
});

// function spaceCompliment() {
//   alert("yowza")
// }

// document.getElementById("doggo").addEventListener("mouseover", spaceCompliment);
// document.getElementById('doggo').onmouseover

// var id = null;
// function myMove() {
//   var elem = document.getElementById("rocket");
//   var pos = 0;
//   clearInterval(id);
//   id = setInterval(frame, 10);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + 'px';
//       elem.style.left = pos + 'px';
//     }
//   }
// }

const port = process.env.PORT || 4000


app.listen(port,()=>{console.log(`listening on port ${port}`)})