const addMovie = async (collection, movieObj) => {
  try {
    await collection.insertOne(movieObj);
    console.log("successfully added movie");
  } catch (error) {
    console.log(error);
  }
};

const listMovies = async (collection) => {
  try {
    const list = await collection.find({}).toArray();
    console.log(list);
  } catch (error) {
    console.log(error);
  }
};

const updateMovie = async (collection, updateObj) => {
  try {
    await collection.updateOne(
      { name: updateObj.filter },
      { $set: { rating: updateObj.rating } }
    );
    console.log("successfully updated movie");
  } catch (error) {
    console.log(error);
  }
};

const deleteMovie = async (collection, deleteObj) => {
  try {
    await collection.deleteOne({ name: deleteObj.filter });
    console.log("successfully deleted movie");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
};
