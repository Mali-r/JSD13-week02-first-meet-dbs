use("sample_mflix");

db.comments.find({});
// Output : All info. of comments

db.comments.findOne({ _id: ObjectId('5a9427648b0beebeb6957ac8')});
/* Output :
{
  _id: ObjectId('5a9427648b0beebeb6957ac8'),
  name: 'Olenna Tyrell',
  email: 'diana_rigg@gameofthron.es',
  movie_id: ObjectId('573a1391f29313caabcd70b4'),
  text: 'Sed iste tenetur ut. Veritatis deserunt iusto blanditiis similique reprehenderit. Expedita voluptas voluptatibus exercitationem odit. Saepe culpa dolorem error nulla.',
  date: ISODate('2007-06-27T20:27:44.000Z')
}
*/

db.comments.findOne({ email: "diana_rigg@gameofthron.es"});
/* Output :
{
  _id: ObjectId('5a9427648b0beebeb6957ac8'),
  name: 'Olenna Tyrell',
  email: 'diana_rigg@gameofthron.es',
  movie_id: ObjectId('573a1391f29313caabcd70b4'),
  text: 'Sed iste tenetur ut. Veritatis deserunt iusto blanditiis similique reprehenderit. Expedita voluptas voluptatibus exercitationem odit. Saepe culpa dolorem error nulla.',
  date: ISODate('2007-06-27T20:27:44.000Z')
}
*/

db.comments.findOne({ name: "John Bishop" });
/* Output :
{
  _id: ObjectId('5a9427648b0beebeb69579f5'),
  name: 'John Bishop',
  email: 'john_bishop@fakegmail.com',
  movie_id: ObjectId('573a1390f29313caabcd446f'),
  text: 'Id error ab at molestias dolorum incidunt. Non deserunt praesentium dolorem nihil. Optio tempora vel ut quas.\nMinus dicta numquam quasi. Rem totam cumque at eum. Ullam hic ut ea magni.',
  date: ISODate('1975-01-21T00:31:22.000Z')
}
*/