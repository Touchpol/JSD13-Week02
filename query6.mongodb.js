//หน้า1
db.movies.find({ countries: {$in: ["USA"]} year: { $gte: 1950, $lte: 1970 } })
//หน้า2
db.movies.find({ genres: { $all: ["Drama", "History"] }, year: { $gt: 1970 } }).count()
//หน้า3
db.movies.find({ cast: "Roy L. McCardell" }).count()
//หน้า4
db.movies.find.({ directors: "Hal Roach" }).count()
//หน้า5
db.movies.find({ directors: "Hal Roach" }).sort({ released:1 }).limit(1)
//หน้า6
db.movies.find({ directors: { $in ["Hal Roach"] }}, { title: 1, "award.wins": 1, _id:0 });