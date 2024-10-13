//import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'

function Checklist() {
    const [selectedOption, setSelectionOption] = useState([])
    const handleCheckBoxChange = (event) => {
        const { name, checked } = event.target;
        if (checked) {
            setSelectionOption([...selectedOption, name])
        } else {
            setSelectionOption(selectedOption.filter((option) => option !== name));

        }


    };
    return (
        <div>
            <h2>CheckList</h2>
            <form>
                <label>
                    <input type="checkbox" name="Option 1" onChange={handleCheckBoxChange} />
                    option 1
                </label>
                <br />
                <label>
                    <input type="checkbox" name="Option 2" onChange={handleCheckBoxChange} />
                    option 2

                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="Option 3"
                        onChange={handleCheckBoxChange}
                    />
                    Option 3
                </label>
                <br />
                <label>
                    <input  type="checkbox"  name="Option 4"  onChange={handleCheckBoxChange}
                    />
                    Option 4
                </label>

            </form>
            {/* Select dynamically selected options*/}

            <div>
                <h3>Selected Options</h3>
                {selectedOption.length > 0 ? (

                    <ul>

                        {selectedOption.map((option, index) =>
                            <li key={index}>{option}</li>)}
                        {/*))*/}
                    </ul>
                ) : (

                    <p>option selected</p>
                )
   
}
            </div>


        </div>





    );



} export default Checklist;