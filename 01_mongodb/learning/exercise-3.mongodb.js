use("sample_mflix");

db.theaters.find({ "location.address.state": "AL" }).count();
// Output : 19

db.theaters.find({ "location.address.city": "La Quinta" }).count();
// Output : 1

db.theaters.findOne({ "location.address.city": "La Quinta" });
/* Output :
{
  _id: ObjectId('59a47286cfa9a3a73e51e73d'),
  theaterId: NumberInt('1020'),
  location: {
    address: {
      street1: '79220 Hwy 111',
      city: 'La Quinta',
      state: 'CA',
      zipcode: '92253'
    },
    geo: {
      type: 'Point',
      coordinates: [
        Double('-116.28111'),
        Double('33.709164')
      ]
    }
  }
}
*/