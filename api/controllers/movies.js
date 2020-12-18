const Movie = require('../models/movies');

exports.index = async (req, res, next) => {

  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
      }
      catch(error)
      {
        next(error);
      }
};

exports.show = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  }
  catch(error)
  {
    next(error);
  }
}

exports.create = async (req, res, next) => {

  try {
    const {_id, title, director, rating } = req.body;
    console.log(req.body);

    const mv = await Movie.create({
      title,
      director,
      rating
    });

    res.status(200).json({ message: "Movie was created successfully", status:"success", movie: mv });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try 
  {
    const {_id, title, director, rating } = req.body;
    const mv = await Movie.findOneAndUpdate({ _id: _id }, {
      title,
      director,
      rating
    });
  res.status(200).json({message:"Movie was updated succesfully", status:"success", movie: mv});
  }
  catch (error) {
    next(error);
  }
}

exports.delete = async (req, res, next) => {
  try {
    const { _id } = req.body;
    await Movie.findOneAndDelete({ _id: _id });
    res.status(200).json({ message: "movie was deleted successfully" });
  } catch (error) {
    next(error);
  }
};
