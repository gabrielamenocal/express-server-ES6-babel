import express from 'express';
import data from './data/data'

const app = express();
const PORT = 3000;

app.get('/', (req,res) =>
    res.send('a get call on / route'))
;

app.listen(PORT, () => {
    console.log('Server running on port' + PORT) ;   
    // console.log(data);
});