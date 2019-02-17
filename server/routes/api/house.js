const House = require('../../models/House');

module.exports = (app) => {
  app.get('/api/house', (req, res, next) => {
    House.find()
      .exec()
      .then((house) => res.json(house))
      .catch((err) => next(err));
  });

  app.post('/api/house', function (req, res, next) {
    const house = new House();

    house.save()
      .then(() => res.json(house))
      .catch((err) => next(err));
  });

  app.delete('/api/houses/:id', function (req, res, next) {
    House.findOneAndRemove({ _id: req.params.id })
      .exec()
      .then((house) => res.json())
      .catch((err) => next(err));
  });
  app.post('/api/house-create-test', function (req, res, next) {
    const house = new House({
        community: "Varsity",
        address: "2500 University Drive NW",
        sq_footage:{
            above_grade:"25ft",
            below_grade:"25ft",
            garage:"25ft"
        },
        history:{
            external_temp:"50c",
            internal_temp:"50c",
            heat_lost:"5u"
        }

    });

    house.save()
      .then(() => res.json(house))
      .catch((err) => next(err));
  });
  app.post('/api/house-create', function (req, res, next) {
    const house = new House({
        community: req.body.community,
        address: req.body.address,
        sq_footage:{
            above_grade:req.body.above_grade,
            below_grade:req.body.below_grade,
            garage:req.body.garage
        },
        history:{
            external_temp:req.body.external_temp,
            internal_temp:req.body.internal_temp,
            runtime_percentage:req.body.runtime_percentage
        }

    });
    // console.log("Comm????",req.body.community);

    house.save()
      .then(() => res.json(house))
      .catch((err) => next(err));



  });
  // app.put('/api/houses/:id/increment', (req, res, next) => {
  //   House.findById(req.params.id)
  //     .exec()
  //     .then((house) => {
  //       house.count++;
  //
  //       house.save()
  //         .then(() => res.json(house))
  //         .catch((err) => next(err));
  //     })
  //     .catch((err) => next(err));
  // });

  // app.put('/api/houses/:id/decrement', (req, res, next) => {
  //   House.findById(req.params.id)
  //     .exec()
  //     .then((house) => {
  //       house.count--;
  //
  //       house.save()
  //         .then(() => res.json(house))
  //         .catch((err) => next(err));
  //     })
  //     .catch((err) => next(err));
  // });
};
