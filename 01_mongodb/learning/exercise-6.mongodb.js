use("sample_mflix");

db.movies.find({
  countries: {$in: ["USA"]},
  year: {$gte: 1950, $lte: 1970}
})
/* Outpu :
{
  _id: ObjectId('573a1394f29313caabcde5b4'),
  plot: 'The story of the great sharpshooter, Annie Oakley, who rises to fame while dealing with her love/professional rival, Frank Butler.',
  genres: [
    'Biography',
    'Comedy',
    'Musical'
  ],
  runtime: NumberInt('107'),
  metacritic: NumberInt('77'),
  rated: 'PASSED',
  cast: [
    'Betty Hutton',
    'Howard Keel',
    'Louis Calhern',
    'J. Carrol Naish'
  ],
  poster: 'https://m.media-amazon.com/images/M/MV5BZWJlZGE1ZDAtZmRiNi00YjkzLTg0ZmItY2NkN2NiYTYzZDlhXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SY1000_SX677_AL_.jpg',
  title: 'Annie Get Your Gun',
  fullplot: 'A story very loosely based on the love story of Annie Oakley and Frank Butler who meet at a shooting match. Fabulous music although the lead characters have virtually nothing to do with the actual historical figures. Annie joins Frank Butler in Col. Cody\'s Wild West Show. They tour the world performing before Royalty as well as the public at large.',
  languages: [
    'English'
  ],
  released: ISODate('1950-05-17T00:00:00.000Z'),
  directors: [
    'George Sidney',
    'Busby Berkeley'
  ],
  writers: [
    'Sidney Sheldon (screenplay)',
    'Herbert Fields (book)',
    'Dorothy Fields (book)'
  ],
  awards: {
    wins: NumberInt('4'),
    nominations: NumberInt('4'),
    text: 'Won 1 Oscar. Another 3 wins & 4 nominations.'
  },
  lastupdated: '2015-08-21 00:35:43.220000000',
  year: NumberInt('1950'),
  imdb: {
    rating: Double('7'),
    votes: NumberInt('2842'),
    id: NumberInt('42200')
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: Double('3.3'),
      numReviews: NumberInt('8617'),
      meter: NumberInt('67')
    },
    dvd: ISODate('2001-07-03T00:00:00.000Z'),
    critic: {
      rating: Double('7.4'),
      numReviews: NumberInt('11'),
      meter: NumberInt('100')
    },
    lastUpdated: ISODate('2015-09-02T18:41:59.000Z'),
    rotten: NumberInt('0'),
    production: 'MGM',
    fresh: NumberInt('11')
  },
  num_mflix_comments: NumberInt('0')
}
  .
  .
  ...
*/

db.movies.find({ 
  genres: { $all: ["Drama", "History"] },
  released: { $gt: ISODate("1970-01-01T00:00:00Z") }
}).count()
// Output : 546

db.movies.find({ cast: "Roy L. McCardell" }).count()
// Output : 1

db.movies.find({ directors: "Hal Roach" }).count();
// Output : 3

db.movies.find({ directors: { $in: ["Hal Roach"] } });
/* Output :
{
  _id: ObjectId('573a1391f29313caabcd68d0'),
  plot: 'A penniless young man tries to save an heiress from kidnappers and help her secure her inheritance.',
  genres: [
    'Comedy',
    'Short',
    'Action'
  ],
  runtime: NumberInt('22'),
  rated: 'TV-G',
  cast: [
    'Harold Lloyd',
    'Mildred Davis',
    '\'Snub\' Pollard',
    'Peggy Cartwright'
  ],
  poster: 'https://m.media-amazon.com/images/M/MV5BNzE1OWRlNDgtMTllNi00NTZiLWIyNTktYTk0MDY1ZWUwYTc5XkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SY1000_SX677_AL_.jpg',
  title: 'From Hand to Mouth',
  fullplot: 'As a penniless man worries about how he will manage to eat, he is joined by a young waif and her dog, who are in the same predicament. Meanwhile, across town a dishonest lawyer is working with a gang of criminals, trying to swindle an innocent young heiress out of her inheritance. As the heiress is on her way home from the lawyer\'s office, she notices the young man and the waif in the midst of their latest problem with the authorities, and she rescues them. Later on, the young man will have an unexpected opportunity to repay her for her kindness.',
  languages: [
    'English'
  ],
  released: ISODate('1919-12-28T00:00:00.000Z'),
  directors: [
    'Alfred J. Goulding',
    'Hal Roach'
  ],
  writers: [
    'H.M. Walker (titles)'
  ],
  awards: {
    wins: NumberInt('0'),
    nominations: NumberInt('1'),
    text: '1 nomination.'
  },
  lastupdated: '2015-04-17 00:16:14.220000000',
  year: NumberInt('1919'),
  imdb: {
    rating: Double('7'),
    votes: NumberInt('639'),
    id: NumberInt('10146')
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: Double('3.3'),
      numReviews: NumberInt('71'),
      meter: NumberInt('55')
    },
    production: 'Pathè Exchange',
    lastUpdated: ISODate('2015-08-21T18:45:11.000Z')
  },
  num_mflix_comments: NumberInt('0')
}
  .
  .
  .. total 3 info.
*/

db.movies.find(
{ 
directors: { $in: ["Hal Roach"] } 
}, 
{
title: 1, 
"awards.wins": 1, 
_id: 0 
}
);
/* Output :
{
  title: 'From Hand to Mouth',
  awards: {
    wins: NumberInt('0')
  }
}
  {
  title: 'High and Dizzy',
  awards: {
    wins: NumberInt('0')
  }
}
  {
  title: 'Now or Never',
  awards: {
    wins: NumberInt('0')
  }
}
*/