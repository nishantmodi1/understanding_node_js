const { MongoClient } = require('mongodb')
const URI = `mongodb+srv://solvekr:OVovKlaQaQUfILKr@solvekr.2wnnbra.mongodb.net/`

const client = new MongoClient(URI)

const dbName = "helloworld";

async function Main() {
  await client.connect();
  console.log("connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection('user');

  // insert a data
  const data ={
    "first_name": "John",
    "last_name": "Doe",
    "place": "bangkok",
  }
  // const insertResult = await collection.insertMany([data]);
  // console.log('Inserted documents =>', insertResult);

  // //Read
  // const findResult = await collection.find({}).toArray();
  // console.log('Found Documents', findResult)

  //find one obj which havefirst_name 'John'
  const result = await collection.find({ first_name: "John"}).toArray()
  console.log('res', result)

  return "done"
}

Main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close())

// NOTES.
// go to mongo db website
//select free cluster
// create a user
// get a connection string
// install mongodb compass
