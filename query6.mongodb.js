db.movies.find({ countries: {$in: ["USA"]} year: { $gte: 1950, $lte: 1970 } })

db.movies.find({ genres: { $all: ["Drama", "History"] }, year: { $gt: 1970 } }).count()

db.movies.find({ cast: "Roy L. McCardell" }).count()

db.movies.find.({ directors: "Hal Roach" }).count()

db.movies.find({ directors: "Hal Roach" }).sort({ released:1 }).limit(1)

db.movies.find({ directors: { $in ["Hal Roach"] }}, { title: 1, "award.wins": 1, _id:0 });