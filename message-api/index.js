const express = require('express');

const Vigenere = require('caesar-salad').Vigenere;
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());


app.post('/encode', async (req, res, next) => {
  try{
    const message = {
      password: req.body.password,
      message: req.body.message,
    }
    await res.send({encode: Vigenere.Cipher(message.password).crypt(`<div>${message.message}</div>`)});

  }catch (e) {
    next(e);
  }

});


app.post('/decode', async (req, res, next) => {

  try{

    const message = {
      password: req.body.password,
      message: req.body.message,
    }
    await res.send({decode: Vigenere.Cipher(message.password).crypt(`<div>${message.message.decode}</div>`)});

  }catch(e) {
    next(e);
  }

});
app.listen(port, () => {
  console.log('We are live on ' + port);
});