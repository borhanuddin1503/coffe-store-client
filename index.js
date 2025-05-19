const express = require('express')
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const cors = require('cors')
const port = process.env.port || 3000

app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.COFFE_USER}:${process.env.COFFE_PASS}@cluster0.pn4qknt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        const coffesCollection = client.db('coffeDB').collection('coffes');
        const usersCollection = client.db('coffeDB').collection('users')

        app.get('/coffes', async (req, res) => {
            const result = await coffesCollection.find().toArray();
            res.send(result)
        })

        app.get('/coffes/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await coffesCollection.findOne(query);
            res.send(result)
        })

        app.post('/coffes', async (req, res) => {
            const newCoffe = req.body;
            const result = await coffesCollection.insertOne(newCoffe);
            res.send(result);
        })

        app.delete('/coffes/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await coffesCollection.deleteOne(query);
            res.send(result)
        });

        app.put('/coffes/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const newCoffe = req.body;
            const updatedDoc = {
                $set: {...newCoffe}
            }
            const result = await coffesCollection.updateOne(query, updatedDoc);
            res.send(result)
        });



        // user api making
        app.post('/users' , async(req , res) => {
            const userInfo = req.body;
            const result = await usersCollection.insertOne(userInfo);
            res.send(result);
        })

        app.get('/users', async(req, res) => {
            const result = await usersCollection.find().toArray();
            res.send(result)
        })

        app.delete('/users/:id' , async (req, res) => {
            const id  = req.params.id
            const query = {_id : new ObjectId(id)};
            const result = await usersCollection.deleteOne(query);
            res.send(result)
        })

    } finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`coffe store server is running on ${port}`)
})