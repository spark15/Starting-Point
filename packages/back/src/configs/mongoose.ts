import mongoose from 'mongoose';

async function run() {
    try {
        const uri = process.env.MONGO_DB_URI || 'failed';
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(uri);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log(
            'Pinged your deployment. You successfully connected to MongoDB!',
        );
    } finally {
        // Ensures that the client will close when you finish/error
        // await mongoose.disconnect();
    }
}

export default run;
