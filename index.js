const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/',(req, res) =>{
    res.send('hello');
});

const users =[
    { 
    "id": 0,"name": "Leanne Graham","email": "Sincere@april.biz","phone":'033746765'
    },
    { 
    "id": 1,"name": "Rahat Shaheed","email": "Rhata@Shaheed.biz","phone" : '033746765'
    },
    { 
    "id": 2,"name": "etu","email": "Farhana@etu.biz","phone" : '033746765'
    },
    { 
    "id": 3,"name": "Reaz Shaheed","email": "Reaz@april.biz","phone" : '033746765'
    },
    { 
    "id": 4,"name": "Lipi Sharmin","email": "lipi@april.biz","phone" : '033746765'
    },
]

app.get('/users', (req, res) =>{
    const search =req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
});

//app.METHOD
app.post('/users',(req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    //res.send(JSON.stringify(newUser))
    res.json(newUser);
});

app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits/mangoes/fazli', (req,res) =>{
    res.send('yummy yummt mongo fazli');
})

app.listen(port, () =>{
    console.log('listening to port', port);
});