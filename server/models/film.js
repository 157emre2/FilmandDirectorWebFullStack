const mongoose = require('mongoose');
const {GraphQLFloat} = require("graphql/type");
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    name: String,
    genre: String,
    imdb: Number,
    directorId: String
});

module.exports = mongoose.model('Film',FilmSchema);