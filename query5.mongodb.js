db.movies.find({}).sort({ runtime: -1 }).limit(5)

db.movies.find({ runtime: { $lt: 60 } }).sort({ runtime: -1 }).limit(5)

db.movies.find({ year: { $gte: 1955, $lte: 1965 } }).limit(3)

db.movies.find({ year: { $gte: 1990, $lte: 2000 } }).count()