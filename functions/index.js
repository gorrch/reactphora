const { Db } = require("mongodb");

const MongoClient = require("mongodb").MongoClient;

let db = null;
const loadDB = async () => {
    if(db){
        return db;
    }

    const client =  await MongoClient.connect(process.env.values.cosmonsConnectionString);

    db = client.db('Advertisements');

    return db;
}

exports.advert = async function (context, req) {
  try {
      const database = await loadDB();
      let escortAdvertisements = await database
        .collection("Escort")
        .find()
        .toArray();

        context.res = {
            body:  { items: escortAdvertisements}
        };
  }
  catch (error){
    context.log(`Error code: ${error.code} message: ${error.message}`);
    context.res = {
        status: 500,
        body: "An error occued, please try again later"
    };
  }
}


// exports.cipa = async function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');
//     if(req.query.name || (req.body && req.body.name)){
//         context.res.json("Hello " + (req.query.name || req.body.name));
//         // context.res = {
//         //     body: "Hello " + (req.query.name || req.body.name)
//         // }
//     }
//     else{
//         context.res = {
//             status: 400,
//             body: "Please pass a name on the query sstring or in the request body"
//         }
//     }
// }