const {
  index, 
  create, 
  update, 
  destroy
  
} = require('../controllers/movies');
// const passport = require('passport');

module.exports = router => {
   router.get('/movies', index);
  // router.get('/movies/:id', show);
  // router.post('/movies', passport.authenticate('jwt', {session: false}), create);
  // router.post('/movies/update',  passport.authenticate('jwt', {session: false}), update);
  // router.post('/movies/delete',  passport.authenticate('jwt', {session: false}), destroy);
};    