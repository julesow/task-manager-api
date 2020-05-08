const { MongoClient, ObjectID } = require("mongodb");

// const MongoClient = mongodb.MongoClient;

const id = new ObjectID();

const connectionURL = "mongodb://127.0.0.1:27017";

const databaseName = "task-manager";

// const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
const client = new MongoClient(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
client.connect(err => {
  if (err) {
    return console.log("unable to connect to database!!!!");
  }
  const collection = client.db(databaseName).collection("tasks");

  //update
  collection
    .updateMany({ completed: false }, { $set: { completed: true } })
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });

  //delete
  collection
    .deleteOne({
      description: "Learn mongoDB"
    })
    .then(result => console.log(result))
    .catch(error => console.log(error));

  //     collection.findOne({ _id: new ObjectID("5ea0150d432e2b57a610b08f")},(err,task)=>{
  //       if(err) return console.log('Unable to fetch ...')
  //       console.log(task)
  //   })
  // collection.find({ completed: false }).toArray((err, tasks) => {
  //   if (err) return console.log("Unable to fetch ...");
  //   console.log(tasks);
  // });

  //   // perform actions on the collection object
  //     collection.insertOne({
  //         _id:id,
  //         name:'Fatima',
  //         age:16
  //     },(err,result)=>{
  //       if (err) return console.log('Unable to insert user data ....')
  //       console.log(result.ops)
  //     })
  //   //   collection.insertMany(
  //     [
  //       {
  //         name: "Gunther",
  //         age: 25
  //       },
  //       {
  //         name: "Rosa Parks",
  //         age: 900
  //       }
  //     ],
  //     (err, result) => {
  //       if (err) return console.log("Unable to insert user data ....");
  //       console.log(result.ops);
  //     }
  //   );
  //   collection.insertMany(
  //     [
  //       {
  //         description: "Learn mongoDB",
  //         completed: false
  //       },
  //       {
  //         description: "Learn GraphQL",
  //         completed: false
  //       },
  //       {
  //         description: "focus on learning step by step",
  //         completed: true
  //       }
  //     ],
  //     (err, result) => {
  //       if (err) return console.log("Unable to insert user data ....");
  //       console.log(result.ops);
  //     }
  //   );

  //   client.close();
  console.log("connected successfully to db ....");
});
