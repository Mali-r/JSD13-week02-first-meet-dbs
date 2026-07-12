use("my-ecommerce-project")

//clear exiting data
db.users.deleteMany({});

//Insert mock data for users collection
db.users.insertMany([
 {
    "_id": "64b1f1a2c3d4e5f6a7b8c002",
    "User_Name": "owner_admin",
    "Password": "$2b$10$hashedpassword456",
    "Full_Name": "เจ้าของร้าน (Owner)",
    "Role": "admin",
    "isActive": true
 }
]);

//Show all data of suppliers
db.users.find({});