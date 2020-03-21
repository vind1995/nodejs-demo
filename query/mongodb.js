let MongoClient = require('mongodb').MongoClient;
let ObjectID = require('mongodb').ObjectID;

// Open the connection to the server
MongoClient.connect("mongodb://localhost:27017/", { useUnifiedTopology: true, useNewUrlParser: true }, async (err, db) => {
  if(err) {
    console.log(err)
  } else {
    console.log("Database created!");
    let dbo = db.db("integration_test");

    // Create customers Collection in integration_test database
    dbo.createCollection("customers", function(err, res) {
      if (err) throw err;
      console.log(res, "Collection created!");
      db.close();
    });

     // Create single document in customers Collection
    const myobj = { name: "Company Inc", address: "Highway 37", product_id: 156 };
    dbo.collection("customers").insertOne(myobj, function(err, data) {
      if (err) throw err;
      console.log(data, "1 document inserted");
      // db.close();
    });

    // Create multiple documents in customers Collection
    const dataArray = [
      { name: 'John', address: 'Highway 71', product_id: 154},
      { name: 'Peter', address: 'Lowstreet 4', product_id: 155},
      { name: 'Amy', address: 'Apple st 652'},
      { name: 'Hannah', address: 'Mountain 21'},
      { name: 'Michael', address: 'Valley 345'},
      { name: 'Sandy', address: 'Ocean blvd 2'},
      { name: 'Betty', address: 'Green Grass 1'},
      { name: 'Richard', address: 'Sky st 331'},
      { name: 'William', address: 'One way 98'},
      { name: 'Vicky', address: 'Yellow Garden 2'},
      { name: 'Ben', address: 'Park Lane 38'},
      { name: 'William', address: 'Central st 954'},
      { name: 'Chuck', address: 'Main Road 989'},
      { name: 'Viola', address: 'Sideway 1633'}
    ];
    dbo.collection("customers").insertMany(dataArray, function(err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      // db.close();
    });

    /*// Get One Document From Customers Collection.
    dbo.collection("customers").findOne({  _id: ObjectID('5e733e140b60fe19885fd197') }, function(err, result) {
      try {
        if (err) {
          console.log(err)
        }
        console.log("Get Data By Id.");
        console.log(result || "Result Not Found");
      }catch (e) {
        console.log(e)
      }
    });

    // Get All Query Documents From Customers Collection.
    dbo.collection("customers").find({ name: 'William' }).toArray((err, result) => {
      try {
        if (err) {
          console.log(err)
        }
        console.log("Get Data By Name.");
        console.log(result || "Result Not Found");
      }catch (e) {
        console.log(e)
      }
    });

    // Sort the result reverse alphabetically by name:
    dbo.collection("customers").find().sort({ name: -1 }).toArray((err, result) => {
      try {
        if (err) {
          console.log(err)
        }
        console.log("Reverse alphabetically by name");
        console.log(result || "Result Not Found");
      }catch (e) {
        console.log(e)
      }
    });

    // Delete the document with the name "Chuck":
    // dbo.collection("customers").deleteOne({}, (err, result) => {
    dbo.collection("customers").deleteOne({ _id: ObjectID("5e733e140b60fe19885fd190") }, (err, result) => {
      try {
        if (err) {
          console.log(err)
        }
        console.log((result && result.result), "document deleted");
      }catch (e) {
        console.log("Error From ", e)
      }
    }); */

    // Delete the "customers" table:
    /*
    dbo.collection("customers").drop((err, delOK)  => {
      try {
        if (err) {
          console.log(err)
        }
        if (delOK) console.log("Collection deleted");
      }catch (e) {
        console.log("Error From ", e)
      }
    });
    */

    // Update the single document :
    /*
    const query = { _id: ObjectID("5e745741f356d22e4c778f11") };
    const newValues = { $set: { name: "Mickey 1", address: "Canyon 123" } };
    dbo.collection("customers").updateOne(query, newValues, (err, res) => {
      try {
        if (err) {
          console.log(err)
        } else {
          console.log(res.result, "1 document updated");
        }
      }catch (e) {
        console.log("Error From ", e)
      }
    });
    */

    // Update many document :
    /*
    const globalQuery = { name: 'Chuck' };
    const mulNewValues = { $set: { name: "Chuck 1", address: "Canyon 123" } };
    dbo.collection("customers").updateMany(globalQuery, mulNewValues, (err, res) => {
      try {
        if (err) {
          console.log(err)
        } else {
          console.log(res.result, "document(s) updated");
        }
      }catch (e) {
        console.log("Error From ", e)
      }
    });

    try {
      const res = await dbo.collection("customers").updateMany(globalQuery, mulNewValues);
      console.log(res.result, "document(s) updated")
    } catch (e) {
      console.log("Error From updateMany:- ", e)
    }
    */

    /*
    // Limit the result to only return 5 documents:
    try {
      const res = await dbo.collection("customers").find().limit(5).toArray();
      console.log(res.length, "get documents.");
    } catch (e) {
      console.log("Error From limit:- ", e)
    }
    */

    // Join the matching "products" document(s) to the "orders" collection:
    /* try {
      const products = [
        { _id: 154, name: 'Chocolate Heaven' },
        { _id: 155, name: 'Tasty Lemons' },
        { _id: 156, name: 'Vanilla Dreams' }
      ];
      const resProducts = await dbo.collection("products").insertMany(products);
      console.log(resProducts, "inserted documents.");


      const res = await dbo.collection("customers").aggregate([
        { $lookup:
            {
              from: 'products',
              localField: 'product_id',
              foreignField: '_id',
              as: 'orderDetails'
            }
        },
        // { $unwind: { path: "$orderDetails", preserveNullAndEmptyArrays: true } }
        { $unwind: { path: "$orderDetails" } } // { $unwind: "$$orderDetails" }
      ]).toArray();
      console.log(JSON.stringify(res), "get aggregated documents.");
    } catch (e) {
      console.log("Error From limit:- ", e)
    } */
  }
});