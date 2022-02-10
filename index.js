const express = require('express');
const PORT = 80;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) =>{
  res.status(200).send('OK');
})

const userRouter = require('./routes/user');
const movieRouter = require('./routes/movie');
г
app.use('/user', userRouter);
app.use('/movie', movieRouter);

app.listen(PORT, ()=>{
  console.log(`Listening for requests on port ${PORT}`)
})

