const { MongoClient } = require('mongodb');
require("dotenv").config();

const connection = async (crudFunc, dataObj) => {
    try {
        const client = new MongoClient(process.env.MONGO_URI);
        await client.connect();
        console.log("successfully connected");
        
        const db = client.db("moviesdb");
        const collection = db.collection("movies");

        await crudFunc(collection, dataObj);
        client.close();
        console.log("client closed")

    } catch (error) {
        console.log(error);
    }
}

module.exports = connection;