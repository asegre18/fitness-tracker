const router = require("express").Router();
const Workout = require("../../../models/workout.js");

//  /api/workouts prepended

router.post("/", (req, res) => {
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    // "runValidators" will ensure new exercises meet our schema requirements
    { new: true, runValidators: true }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/", (req, res) => {
  Workout.find()
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/range", (req, res) => {
  Workout.find({}).limit(7)
    .then(dbWorkouts => {
      console.log(dbWorkouts)
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete("/", ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;