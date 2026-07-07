use("sample_mflix");

db.movies.find({}).sort({ runtime: -1 }).limit(5);
/* Output :
{
  _id: ObjectId('573a1397f29313caabce69db'),
  plot: 'The economic and cultural growth of Colorado spanning two centuries from the mid-1700s to the late-1970s.',
  genres: [
    'Action',
    'Adventure',
    'Drama'
  ],
  runtime: NumberInt('1256'),
  cast: [
    'Raymond Burr',
    'Barbara Carrera',
    'Richard Chamberlain',
    'Robert Conrad'
  ],
  num_mflix_comments: NumberInt('1'),
  poster: 'https://m.media-amazon.com/images/M/MV5BMTM4OTMyMzg4MV5BMl5BanBnXkFtZTcwMTMzMzU1MQ@@._V1_SY1000_SX677_AL_.jpg',
  title: 'Centennial',
  fullplot: 'This is the story of the evolution of the town Centennial, Colorado. It follows the paths of dozens of people who come to the area for many reasons: money, freedom, or crime. It also shows the bigoted treatment of the Native Indians by the advancing US colonists. It is topped off with a murder mystery that takes 100 years to solve.',
  languages: [
    'English'
  ],
  released: ISODate('1978-10-01T00:00:00.000Z'),
  awards: {
    wins: NumberInt('5'),
    nominations: NumberInt('2'),
    text: 'Nominated for 2 Golden Globes. Another 3 wins & 2 nominations.'
  },
  lastupdated: '2015-09-02 00:38:39.193000000',
  year: NumberInt('1978'),
  imdb: {
    rating: Double('8.5'),
    votes: NumberInt('2071'),
    id: NumberInt('76993')
  },
  countries: [
    'USA'
  ],
  type: 'series',
  tomatoes: {
    viewer: {
      rating: Double('2.9'),
      numReviews: NumberInt('283'),
      meter: NumberInt('40')
    },
    dvd: ISODate('2005-05-10T00:00:00.000Z'),
    lastUpdated: ISODate('2015-08-20T18:45:21.000Z')
  }
}
.
.
... total 5 info.
*/

db.movies.find({ runtime: { $lt: 60 } }).sort({ runtime: -1 }).limit(5);
/* Output :
{
  _id: ObjectId('573a13a7f29313caabd1a65b'),
  plot: 'James Cameron and Bill Paxton, director and actor of the 1997 film Titanic, travel to the final undersea resting place of the fated ship of dreams.',
  genres: [
    'Documentary',
    'Family'
  ],
  runtime: NumberInt('59'),
  metacritic: NumberInt('67'),
  cast: [
    'Bill Paxton',
    'John Broadwater',
    'Lori Johnston',
    'Charles Pellegrino'
  ],
  num_mflix_comments: NumberInt('2'),
  poster: 'https://m.media-amazon.com/images/M/MV5BNDM5MzY0MjY2MF5BMl5BanBnXkFtZTYwOTc5ODU3._V1_SY1000_SX677_AL_.jpg',
  title: 'Ghosts of the Abyss',
  fullplot: 'Academy Awardè winning director and master storyteller James Cameron journeys back to the site of his greatest inspiration # the legendary wreck of the Titanic. With a team of the world\'s foremost historic and marine experts and friend Bill Paxton, he embarks on an unscripted adventure back to the final grave where nearly 1,500 souls lost their lives almost a century ago. Using state-of-the-art technology developed expressly for this expedition, Cameron and his crew are able to explore virtually all of the wreckage, inside and out, as never before. With the most advanced 3D photography, moviegoers will experience the ship as if they are part of the crew, right inside the dive subs. In this unprecedented motion picture event, made especially for IMAX 3D Theatres and specially outfitted 35mm 3D theaters across the country, Cameron and his team bring audiences to sights not seen since the sinking 90 years ago and explore why the landmark vessel # more than any shipwreck # continues to intrigue and fascinate the public.',
  languages: [
    'English'
  ],
  released: ISODate('2003-04-18T00:00:00.000Z'),
  directors: [
    'James Cameron'
  ],
  rated: 'PG',
  awards: {
    wins: NumberInt('0'),
    nominations: NumberInt('1'),
    text: '1 nomination.'
  },
  lastupdated: '2015-08-18 00:06:35.250000000',
  year: NumberInt('2003'),
  imdb: {
    rating: Double('6.9'),
    votes: NumberInt('3860'),
    id: NumberInt('297144')
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    website: 'http://disney.go.com/disneypictures/ghosts/index.html',
    viewer: {
      rating: Double('3.3'),
      numReviews: NumberInt('6415'),
      meter: NumberInt('66')
    },
    dvd: ISODate('2004-04-27T00:00:00.000Z'),
    critic: {
      rating: Double('7.1'),
      numReviews: NumberInt('100'),
      meter: NumberInt('80')
    },
    boxOffice: '$16.3M',
    consensus: 'The underwater footage is both beautiful and awe-inspiring.',
    rotten: NumberInt('20'),
    production: 'Buena Vista Distribution',
    lastUpdated: ISODate('2015-08-25T18:01:21.000Z'),
    fresh: NumberInt('80')
  }
}
.
.
... total 5 info.
*/

db.movies.find({ year: { $gt: 1954, $lt: 1966 } }).sort({ year: 1 }).limit(3);
/* Output :
{
  _id: ObjectId('573a1394f29313caabcdf5a0'),
  countries: [
    'Italy'
  ],
  genres: [
    'Comedy',
    'Drama',
    'Romance'
  ],
  runtime: NumberInt('101'),
  cast: [
    'Sophia Loren',
    'Franca Valeri',
    'Vittorio De Sica',
    'Raf Vallone'
  ],
  title: 'Il segno di Venere',
  lastupdated: '2015-08-21 00:45:21.407000000',
  languages: [
    'Italian'
  ],
  released: ISODate('1955-03-12T00:00:00.000Z'),
  directors: [
    'Dino Risi'
  ],
  writers: [
    'Edoardo Anton (story)',
    'Luigi Comencini (story)',
    'Franca Valeri (story)',
    'Edoardo Anton (screenplay)',
    'Ennio Flaiano (screenplay)',
    'Franca Valeri (screenplay)',
    'Dino Risi (screenplay)',
    'Cesare Zavattini (scenario collaborator)'
  ],
  awards: {
    wins: NumberInt('0'),
    nominations: NumberInt('1'),
    text: '1 nomination.'
  },
  year: NumberInt('1955'),
  imdb: {
    rating: Double('6.8'),
    votes: NumberInt('250'),
    id: NumberInt('46292')
  },
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: Double('4'),
      numReviews: NumberInt('1')
    },
    lastUpdated: ISODate('2015-05-25T19:14:45.000Z')
  },
  num_mflix_comments: NumberInt('0')
}
  .
  .
  ... total 3 info.
*/

db.movies.find({ released: { $gte: ISODate("1990-01-01T00:00:00Z"), $lt: ISODate("2001-01-01T00:00:00Z") } }).count();
// Output = 3934