import express from 'express';
import data from './data/data';


const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use('/stuffs', express.static('stuffs'));


app.get('/', (req, res) =>
    // res.send('a get call on / route');
    res.json(data)
);

app.put('/', (req, res) =>
    res.send('a put call on /')

);

app.post('/', (req, res) =>
    res.send('a post call on /')

);

app.delete('/', (req, res) =>
    res.send('a delete call on /')

);



app.listen(PORT, () => {
    console.log('Server running on port' + PORT) ;   
    // console.log(data);
});