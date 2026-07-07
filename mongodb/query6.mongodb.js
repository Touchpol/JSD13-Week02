use("sample_mflix");
//หน้า1 หาหนังในประเทศ...ต้องใช้ $in + กรองปีที่ปล่อยฉาย = $gte(มากกว่าหรือเท่ากับ) และ $lte(น้อยกว่าหรือเท่ากับ)
db.movies.find({ countries: {$in: ["USA"]}, year: { $gte: 1950, $lte: 1970 } })
//หน้า2 หาหนังที่มีทั้งแนว Drama และ History ต้องใช้ "$all" เพื่อให้ครบ2เงื่อนไข + ใช้ $gt เพื่อกรองปีที่มากกว่า + .count เพื่อหาจำนวน
db.movies.find({ genres: { $all: ["Drama", "History"] }, year: { $gt: 1970 } }).count()
//หน้า3 หาหนังที่มีชื่อนักแสดง ต้องใส่ "cast:"
db.movies.find({ cast: "Roy L. McCardell" }).count()
//หน้า4 หาหนังที่เจาะจงผู้กำกับ ต้องใส่ "directors:"
db.movies.find({ directors: "Hal Roach" }).count()
//หน้า5 หาหนังที่เจาะจงผู้กำกับ ต้องใส่ "directors:" + ใช้ ".sort" เพื่อเรียงปีจากเลขน้อยไปมาก + ใช้ ".limit(1)" เพื่อเลือกมาแค่อันแรกสุด(earliest)
db.movies.find({ directors: "Hal Roach" }).sort({ released:1 }).limit(1)
//หน้า6 ไม่เข้าใจ
db.movies.find({ directors: { $in: ["Hal Roach"] }}, { title: 1, "award.wins": 1, _id:0 });