const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/', async (req, res) => {
  return res.json({sucess : true, method : "POST", body : req.body});
});

app.get('/', async (req, res) => {
  return res.json({sucess : true, method : "GET"});
});

app.put('/', async (req, res) => {
  return res.json({sucess : true, method : "PUT", body : req.body});
});

app.delete('/', async (req, res) => {
  return res.json({sucess : true, method : "DELETE", body : req.body});
});

app.listen(48653, () => {
  console.log("Todo correcto en puerto 47683");
});