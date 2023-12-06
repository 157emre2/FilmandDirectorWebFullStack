import React, {useState} from "react";
import {useMutation as xx} from "@apollo/client";
import {GET_DIRECTORS, ADD_DIRECTOR_MUTATION} from "../../query/queries";

function AddDirectorComponent() {
    const [formState, setFormState] = useState({
        name: "",
        age: 0
    });

    const [add_director] = xx(ADD_DIRECTOR_MUTATION, {
        variables: {
            name: formState.name,
            age: formState.age
        },
        refetchQueries: [{query: GET_DIRECTORS}]
    })

    return(
        <div>
            <h2>Add Director</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                add_director();
            }}>
                <div>
                    <label htmlFor="dname">Director Name..:</label>
                    <input type="text" id="dname" onChange={(e) => setFormState({...formState, name: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="dage">Director Age..:</label>
                    <input type="number" min="0" id="dage" onChange={(e) => setFormState({...formState, age: Number(e.target.value)})}/>
                </div>
                <button type="submit">+</button>
            </form>
        </div>
    );
}

export default AddDirectorComponent;