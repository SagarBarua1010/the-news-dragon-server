const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT ||3000;

const categories = require('./data/categories.json');

app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/categories', (req,res)=>{
    res.send(categories);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})