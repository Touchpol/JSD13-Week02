//หน้า1
db.theaters.find({ "location.address.state": "AL" }).count()
//หน้า2
db.theaters.find({ "location.address.city": "La Quinta" }).count()
//หน้า3
db.theaters.findOne({ "location.address.city": "La Quinta" })