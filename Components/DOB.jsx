import React, {useState, useEffect} from "react";
import "../cssstyles/homepage.css";
import { useNavigate } from 'react-router-dom';

const DOB = () => {
    
    const navigate = useNavigate();
    let [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (event) => {
        selectedValue += event.target.value
        setSelectedValue(selectedValue);
    };

    const handleButtonClick = () => {
        navigate('/unsubscribe');
    }

    return (
        <>
            <h1 style = {{textAlign : "center"}}>Enter your DOB for verification:</h1>
            <div className="char-select-parent">
                <div className="char-select">
                    <p>
                        Write your inputs like this: to confirm your DOB to unsubscribe <br></br>
                        For Example: January 1 2001 would be <br></br>
                        <b>One million, one hundred and two thousand and one</b>
                    </p>
                    <select
                            id="dateOptions"
                            name="dateOptions"
                            value={selectedValue}
                            onChange={handleSelectChange}
                        >
                            <option value="">Select...</option>
                            <option value=" "> </option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                            <option value="G">G</option>
                            <option value="H">H</option>
                            <option value="I">I</option>
                            <option value="J">J</option>
                            <option value="K">K</option>
                            <option value="L">L</option>
                            <option value="M">M</option>
                            <option value="N">N</option>
                            <option value="O">O</option>
                            <option value="P">P</option>
                            <option value="Q">Q</option>
                            <option value="R">R</option>
                            <option value="S">S</option>
                            <option value="T">T</option>
                            <option value="U">U</option>
                            <option value="V">V</option>
                            <option value="W">W</option>
                            <option value="X">X</option>
                            <option value="Y">Y</option>
                            <option value="Z">Z</option>
                            <option value="a">a</option>
                            <option value="b">b</option>
                            <option value="c">c</option>
                            <option value="d">d</option>
                            <option value="e">e</option>
                            <option value="f">f</option>
                            <option value="g">g</option>
                            <option value="h">h</option>
                            <option value="i">i</option>
                            <option value="j">j</option>
                            <option value="k">k</option>
                            <option value="l">l</option>
                            <option value="m">m</option>
                            <option value="n">n</option>
                            <option value="o">o</option>
                            <option value="p">p</option>
                            <option value="q">q</option>
                            <option value="r">r</option>
                            <option value="s">s</option>
                            <option value="t">t</option>
                            <option value="u">u</option>
                            <option value="v">v</option>
                            <option value="w">w</option>
                            <option value="x">x</option>
                            <option value="y">y</option>
                            <option value="z">z</option>
                    </select>
                    <button onClick = {handleButtonClick}>Next</button>
                    <h2>{selectedValue}</h2>
                </div>
            </div>
        </>
    );


}

export default DOB;