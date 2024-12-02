import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../cssstyles/homepage.css'

const Robot = () => {
    const navigate = useNavigate();
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [pane, setPanePop] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        setPosition({ top: randomY, left: randomX });
    }, []);

    const panepop = () => {
        if (selectedValue) {
            window.alert("You Selected: " + selectedValue + " ,I am a Robot, Validation Failed!!");
        } else {
            window.alert("Please select an option before submitting.");
        }
        setPanePop(!pane);
    };

    const handleYesClick = () => {
        navigate('/dob');
    }

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Are you a Robot ?</h1>
            <div className="text-holder-parent">
                <div className="text-holder">
                    <select
                        id="robotoptions"
                        name="robotoptions"
                        value={selectedValue}
                        onChange={handleSelectChange}
                    >
                        <option value="">Select...</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <p>I am a robot 🤖</p>
                    <button className="submit" onClick={panepop}>Submit</button>
                </div>
            </div>
            <div
                className="transparent-button-robotcheck"
                style={{
                    position: "absolute",
                    top: `${position.top}px`,
                    left: `${position.left}px`,
                    zIndex: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <button 
                    type="button" 
                    onClick={handleYesClick} 
                >
                    I am Human
                </button>
            </div>
        </>
    );
};

export default Robot;
