const express = require('express');
const cors = require('cors');
const upload = require('multer')({ dest: 'uploads/' })
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  const upFile = req.file
  res.json({
    name: upFile.originalname,
    type: upFile.mimetype,
    size: upFile.size
  });
});

app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
