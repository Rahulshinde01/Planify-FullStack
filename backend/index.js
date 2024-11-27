const express = require('express')
const { createTask, updateTask } = require("./types")
const {megamodel} = require("./db")
const cors = require('cors')
require('dotenv').config();

const app = express();

app.use(express.json())
app.use(cors());


app.get('/', async (req, res)=>{
    const allTasks = await megamodel.find();
    res.json({
        allTasks
    })
})


app.post('/add',async function(req, res){
    const createPayload = req.body;

    const parsedPayload = createTask.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).send("invalid inputs")
        return;
    }


    try{
        const {_id} = await megamodel.create({
            tasks : createPayload.tasks,
            description : createPayload.description
            
        })

        res.send(_id);
    }
    catch(err){
        res.status(500).send("user creation failed")
        return;
    }

    
})



app.put('/update',async (req, res)=>{
    const id = req.body;

    const parsedId = updateTask.safeParse(id)

    if(!parsedId.success){
        res.status(411).send("invalid inputs")
        return;
    }

    userId = parsedId.data.id;
    await megamodel.updateOne({_id : userId},{completed : true} );

    res.json({
        msg: "updated succesfully"
    })
})


const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT}`)
})