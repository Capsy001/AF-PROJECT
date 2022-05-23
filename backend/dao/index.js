import {MongoClient} from "mongodb"

const client = new MongoClient('', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect(err => {
    if(err){
        console.error(err);
        process.exit(-1);
    }
    console.log("Successfully connected to MongoDB");
})

export default client;
