//จารสอน
use("sample_mflix");
//หน้า1
db.comments.find();
//หน้า2
db.comments.findone({_id: ObjectedId("5a9427648b0beebeb69579f5")});
//หน้า3
db.comments.findOne({ email: "john_bishop@fakegmail.com"});
//หน้า4
db.comments.findOne({ name: "John Bishop" });
// mongodb ต้องมี semicolon (;) ปิดเพื่อจบคำสั่ง