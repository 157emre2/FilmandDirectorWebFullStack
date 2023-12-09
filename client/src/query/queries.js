import { gql} from "@apollo/client";

const GET_DIRECTORS = gql`
    {
        directors{
            name 
            id
        }
    }
`;

const ADD_FILM_MUTATION = gql`
    mutation AddFilm($name: String!, $genre: String!, $imdb: Float!, $directorId: ID!){
        addFilm(name: $name, genre: $genre, imdb: $imdb, directorID: $directorId){
            name
            id
        }
    }
`;

const GET_FILMS = gql`
    {
        films {
            id
            name
            genre
            imdb
            director{
                name 
                id
            }
        }
    }
`;

const ADD_DIRECTOR_MUTATION = gql`
    mutation AddDirector($name: String!, $age: Int!){
        addDirector(name: $name, age: $age){
            name 
            id
        }
    }
`;

const GET_DIRECTORS_FULL = gql`
    {
        directors{
            name 
            id
            films{
                name
                imdb
                id
            }
        }
    }
`;

const GET_SEARCH_FILMS = gql`
    query SearchFilm($name: String!){
        searchFilm(name: $name){
            name
            id
        }
    }
`;

const GET_SEARCH_DIRECTOR = gql`
    query SearchDirector($name: String!){
        searchDirector(name: $name){
            name
            id
        }
    }
`;

export {GET_DIRECTORS, ADD_FILM_MUTATION, GET_FILMS, ADD_DIRECTOR_MUTATION, GET_DIRECTORS_FULL, GET_SEARCH_FILMS, GET_SEARCH_DIRECTOR};