use ("sample_mflix")
//หน้า1
db.movies.findOne({ type: "movie", rated: "TV-G" });
//หน้า2
db.movies.find({ type: "movie", rated: "TV-G" }).count()