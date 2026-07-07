//หน้า1 ไม่ต้องใช้ "findOne" เพราะถาม how many แปลว่ามีหลาย + ใส่ ".count()" เพราะถามจำนวo
db.movies.find({ plot; { $regex: "American", $options: "i" } }).count();
//หน้า2
db.movies.find({ plot; { $regex: "street", $options: "i" } }).count();
//หน้า3 ไม่มี ".count" เพราะ ".count" ใช้เมื่อต้องการได้ตัวเลขสรุป (โจทยืถามว่ามีลักษณะอย่างไรไม่ใช่มีอะไรบ้าง)
db.movies.find({ plot; { $regex: "street", $options: "i" } });