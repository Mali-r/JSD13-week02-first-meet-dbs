const fs = require('fs');

//1. named database
use("my-ecommerce-project")

//2. clear exiting data
db.products.deleteMany({});

//3. import data from JSON file
db.products.insertMany(
    JSON.parse(fs.readFileSync('./first-meet-dbs/03_my-ecommerce-project/06_mongodb-schema_products.jsonc', 'utf8'))
);

//4. Show collection data
db.products.find({});