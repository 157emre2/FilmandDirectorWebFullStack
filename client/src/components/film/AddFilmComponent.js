import React, {useState} from 'react';
import {useQuery as uwu, useMutation as xx,} from "@apollo/client";
import {GET_DIRECTORS, ADD_FILM_MUTATION, GET_FILMS} from '../../query/queries';



function AddFilmComponent(){

    const [formstate, setFormstate] = useState({
        name: "",
        genre: "",
        imdb: 0,
        directorId: ""
    })

    const [add_film] = xx(ADD_FILM_MUTATION, {
        variables: {
            name: formstate.name,
            genre: formstate.genre,
            imdb: formstate.imdb,
            directorId: formstate.directorId
        },
        refetchQueries: [{query: GET_FILMS}]
    })
    function getdirectors(){
        const { loading, error, data } = uwu(GET_DIRECTORS);

        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        return data.directors.map(d => {
            return (<option key={d.id} value={d.id}>{d.name}</option>);
        });
    }

    return (
        <div>
            <h2>Add Film</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                add_film();
            }}>
                <div>
                    <label htmlFor="fname">Film Name..:</label>
                    <input type="text" id="fname" onChange={ (e) => setFormstate({...formstate, name: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="fgenre">Film Genre..:</label>
                    <input type="text" id="fgenre" onChange={ (e) => setFormstate({...formstate, genre: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="fimdb">Film Imdb..:</label>
                    <input type="number" id="fimdb" step="0.1" max="10" min="0" onChange={ (e) => setFormstate({...formstate, imdb: Number(e.target.value)})}/>
                </div>
                <div>
                    <label htmlFor="fdirector">Film Director..:</label>
                    <select id="fdirector" onChange={(e) => setFormstate({...formstate, directorId: e.target.value})}>
                        <option>Select Director</option>
                        { getdirectors() }
                    </select>
                </div>
                <button type={"submit"}>+</button>
            </form>
        </div>
    );
}

export default (AddFilmComponent);