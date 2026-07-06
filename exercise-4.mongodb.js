use("sample_mflix");

db.movies.find({ plot: { $regex: "American", $options: "i" } }).count();
// Output : 557

db.movies.find({ plot: { $regex: "street.$", $options: "i" } }).count();
// Output : 8

db.movies.find({ plot: { $regex: "street.$", $options: "i" } })
/*
{
  _id: ObjectId('573a1391f29313caabcd6d40'),
  plot: 'A tipsy doctor encounters his patient sleepwalking on a building ledge, high above the street.',
  genres: [
    'Comedy',
    'Short'
  ],
  runtime: NumberInt('26'),
  rated: 'PASSED',
  cast: [
    'Harold Lloyd',
    'Roy Brooks',
    'Mildred Davis',
    'Wallace Howe'
  ],
  num_mflix_comments: NumberInt('1'),
  poster: 'https://m.media-amazon.com/images/M/MV5BODliMjc3ODctYjhlOC00MDM5LTgzNmUtMjQ1MmViNDQ0NzlhXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SY1000_SX677_AL_.jpg',
  title: 'High and Dizzy',
  fullplot: 'After a long wait, a young doctor finally has a patient come to his office. She is a young woman whose father has brought her to be treated for sleep-walking, but the father becomes annoyed with the doctor, and takes his daughter away. Soon afterward, the young doctor shares in a drinking binge with another doctor who has built a still in his office. After a series of misadventures, the two of them wind up in the same hotel where the daughter and her father are staying, leading to some hazardous predicaments.',
  languages: [
    'English'
  ],
  released: ISODate('1920-07-11T00:00:00.000Z'),
  directors: [
    'Hal Roach'
  ],
  writers: [
    'Frank Terry (story)',
    'H.M. Walker (titles)'
  ],
  awards: {
    wins: NumberInt('0'),
    nominations: NumberInt('1'),
    text: '1 nomination.'
  },
  lastupdated: '2015-08-11 00:35:33.717000000',
  year: NumberInt('1920'),
  imdb: {
    rating: Double('7'),
    votes: NumberInt('646'),
    id: NumberInt('11293')
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: Double('3.4'),
      numReviews: NumberInt('30'),
      meter: NumberInt('70')
    },
    lastUpdated: ISODate('2015-06-27T19:17:10.000Z')
  }
}
.
.
.
...
*/