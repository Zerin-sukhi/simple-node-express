
const express = require('express');
const cors = require('cors');
//backend er app er opor sob hobe
const app = express();

app.use(cors());
app.use(express.json());
//const port=3000;eta korbona karon react app sorasori eta die kore
//const port= process.env
const port = 5000;

app.get('/', (req, res) => {
    res.send('wow and wow from my second node server');
});

const users = [
    { id: 1, name: 'A', email: 'dhg@hmail.com', phone: '756895347' },
    { id: 2, name: 'B', email: 'dhg@hmail.com', phone: '756895347' },
    { id: 3, name: 'C', email: 'dhg@hmail.com', phone: '756895347' },
    { id: 4, name: 'D', email: 'dhg@hmail.com', phone: '756895347' },
    { id: 5, name: 'E', email: 'dhg@hmail.com', phone: '756895347' }
]
//sob users der dekhano jabe
app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query or search query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
})
//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    //res.send(JSON.stringify(newUser));
    res.json(newUser)
})

//ekhane dynamic vabe id die single user der paoa jabe.dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})
//ekhane array akare onek gulo value akta parameter fruit er moddhe paoa jabe.
app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'apple', 'baanana'])
})
//ekhane ektar moddhe arekta/arektar modddhe arekta die o value gula paoa jabe.
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummy tok marka fajli');
})
//eita holo total ja ja korci seita akta port e dekhanor jonno listen die dekhnao hosse.port er use er jonno mainly.
app.listen(port, () => {
    console.log('listening to port', port);
})
