const router = require('express').Router();
const workoutRoutes = require('./workoutRoutes');

// /api prepended
router.use('/workouts', workoutRoutes);

module.exports = router;