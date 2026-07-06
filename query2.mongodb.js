use ("sample_mflix")
//หน้า1 
db.movies.findOne({ type: "movie", rated: "TV-G" });
//หน้า2 ไม่ต้องใช้ "findOne" เพราะถาม how many แปลว่ามีหลาย
db.movies.find({ type: "movie", rated: "TV-G" }).count();