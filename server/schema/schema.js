const graphql= require('graphql');
const Film = require('../models/film');
const Director = require('../models/director');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLSchema,
    GraphQLNonNull
} = graphql;

const FilmType = new GraphQLObjectType({
    name: 'Film',
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString },
        genre: { type: GraphQLString},
        imdb: { type: GraphQLFloat},
        director: {
            type: DirectorType,
            resolve(parent, args) {
                return Director.findById(parent.directorId);
            }
        }
    })
});

const DirectorType = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        age: { type: GraphQLInt},
        films: {
            type: new GraphQLList(FilmType),
            resolve(parent, args){
                return Film.find({ directorId: parent.id});
            }
        }
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        film: {
            type: FilmType,
            args: {id: {type: GraphQLID}},
            resolve(parent,args){
                return Film.findById(args.id);
            }
        },
        director: {
            type: DirectorType,
            args: {id: { type: GraphQLID}},
            resolve(parent,args) {
                return Director.findById(args.id);
            }
        },
        films: {
            type: new GraphQLList(FilmType),
            resolve(parent,args) {
                return Film.find();
            }
        },
        directors: {
            type: new GraphQLList(DirectorType),
            resolve(parent,args) {
                return Director.find();
            }
        },
        searchFilm: {
            type: new GraphQLList(FilmType),
            args: { name: { type: GraphQLString}},
            resolve(parent, args) {
                return Film.find({ name: { $regex: args.name, $options: 'i'}});
            }
        },
        searchDirector: {
            type: new GraphQLList(DirectorType),
            args: { name: { type: GraphQLString}},
            resolve(parent, args){
                return Director.find({ name: { $regex: args.name, $options: 'i'}});
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addFilm: {
            type: FilmType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString)},
                genre: { type: new GraphQLNonNull(GraphQLString)},
                imdb: { type: new GraphQLNonNull(GraphQLFloat)},
                directorID: { type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent,args) {
                let film = new Film({
                    name: args.name,
                    genre: args.genre,
                    imdb: args.imdb,
                    directorId: args.directorID
                });
                return film.save();
            }
        },
        addDirector: {
            type: DirectorType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString)},
                age: { type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parent,args) {
                let director = new Director({
                    name: args.name,
                    age: args.age
                });
                return director.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});