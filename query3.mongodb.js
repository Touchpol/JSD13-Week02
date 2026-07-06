db.theaters.find({ "location.address.state": "AL" }).count()

db.theaters.find({ "location.address.city": "La Quinta" }).count()
