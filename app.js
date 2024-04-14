const express = require('express')
const app = express()

/*app.get('/', function (req, res) {
  res.send('Hello World')
})
*/
// Serve static files from the "public" directory
app.use(express.static('public'));

app.listen(3000)