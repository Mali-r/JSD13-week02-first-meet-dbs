use("sample_mflix");

db.movies.findOne({ type: "movie", rated: "TV-G"});
/* Output :
{
  _id: ObjectId('573a1390f29313caabcd42e8'),
  plot: 'A group of bandits stage a brazen train hold-up, only to find a determined posse hot on their heels.',
  genres: [
    'Short',
    'Western'
  ],
  runtime: NumberInt('11'),
  cast: [
    'A.C. Abadie',
    'Gilbert M. \'Broncho Billy\' Anderson',
    'George Barnes',
    'Justus D. Barnes'
  ],
  poster: 'https://m.media-amazon.com/images/M/MV5BMTU3NjE5NzYtYTYyNS00MDVmLWIwYjgtMmYwYWIxZDYyNzU2XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SY1000_SX677_AL_.jpg',
  title: 'The Great Train Robbery',
  fullplot: 'Among the earliest existing films in American cinema - notable as the first film that presented a narrative story to tell - it depicts a group of cowboy outlaws who hold up a train and rob the passengers. They are then pursued by a Sheriff\'s posse. Several scenes have color included - all hand tinted.',
  languages: [
    'English'
  ],
  released: ISODate('1903-12-01T00:00:00.000Z'),
  directors: [
    'Edwin S. Porter'
  ],
  rated: 'TV-G',
  awards: {
    wins: NumberInt('1'),
    nominations: NumberInt('0'),
    text: '1 win.'
  },
  lastupdated: '2015-08-13 00:27:59.177000000',
  year: NumberInt('1903'),
  imdb: {
    rating: Double('7.4'),
    votes: NumberInt('9847'),
    id: NumberInt('439')
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: Double('3.7'),
      numReviews: NumberInt('2559'),
      meter: NumberInt('75')
    },
    fresh: NumberInt('6'),
    critic: {
      rating: Double('7.6'),
      numReviews: NumberInt('6'),
      meter: NumberInt('100')
    },
    rotten: NumberInt('0'),
    lastUpdated: ISODate('2015-08-08T19:16:10.000Z')
  },
  num_mflix_comments: NumberInt('0')
}
*/

db.movies.find({ type: "movie", rated: "TV-G"}).count();
// Output : 58