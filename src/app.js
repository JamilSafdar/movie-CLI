const connection = require("./db/connection");
const yargs = require("yargs");
const command = process.argv[2];
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./utils");

const app = async () => {
  try {
    if (command === "add") {
      const newMovie = {
        title: yargs.argv.title,
        actor: yargs.argv.actor,
        rating: yargs.argv.rating
      };
      await connection(addMovie, newMovie);

    } else if (command === "list") {
      await connection(listMovies);

    } else if (command === "update") {
      const updateObj = {
        filter: yargs.argv.title,
        rating: yargs.argv.actor,
      };
      await connection(updateMovie, updateObj);

    } else if (command === "delete") {
      await connection(deleteMovie, { filter: yargs.argv.title });

    } else {
      console.log("Incorrect command");
    }
  } catch (error) {
    console.log(error);
  }
};

app();
