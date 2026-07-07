use("sample_mflix");
//หน้า1 ใช้ "runtime: -1" เพื่อเรียงจากค่ามากสุดไปน้อยสุด (top 5 runtime movies = หนัง5เรื่องที่เวลาฉายสูงสุด)
db.movies.find({}).sort({ runtime: -1 }).limit(5)
//หน้า2
db.movies.find({ runtime: { $lt: 60 } }).sort({ runtime: -1 }).limit(5)
//หน้า3
db.movies.find({ year: { $gte: 1955, $lte: 1965 } }).limit(3)
//หน้า4 (ไม่ตรงกับเฉลย(ในเฉลยใส่เป็นวัน-เดือน-ปีTชั่วโมง:นาที:วินาที))
db.movies.find({ year: { $gte: 1990, $lte: 2000 } }).count()