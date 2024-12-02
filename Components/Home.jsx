import React, { useState, useEffect } from 'react';
import "../cssstyles/homepage.css";
import { useNavigate } from 'react-router-dom';

const prompts = [
    "Why are you here then?",
    "Not patient are we?",
    "Oh wow, pressing a button. This is the peak of excitement!",
    "Hold on, I need to take a break after that intense button press.",
    "Congrats, you've just unlocked the true meaning of life... with a button press.",
    "What a thrilling moment. I am sure the universe is forever changed.",
    "That button press was so revolutionary, it might go down in history.",
    "Oh, you pressed a button? Someone give this person a medal!",
    "Breaking news: someone pressed a button. Call the authorities.",
    "I can't believe you pressed that button. Truly, a bold move.",
    "Another button pressed. What will you do next, solve world peace?",
    "You pressed the button... and with that, everything has changed forever.",
    "You pressed the button... Somewhere in the world no one cares!"
];

const Home = () => {
    const [pressed, setPressed] = useState(false);
    const [noPressed, setNoPressed] = useState(false);
    const [timerPressed, setTimerPressed] = useState(false);
    const [timeLeft, setTimeLeft] = useState(3600);
    const [showModal, setShowModal] = useState(false);
    const [randomPrompt, setRandomPrompt] = useState("");
    const [hideButton, setHideButton] = useState(false);
    const [dispressed, setdispressed] = useState(true);

    // Timer button clicked
    const timerButton = () => {
        setTimerPressed(true);
        setTimeLeft(3600);
        setShowModal(true);
    };

    // Check button clicked
    const checkButton = () => {
        setPressed(true);
        const randomIndex = Math.floor(Math.random() * prompts.length); // Pick a random index
        setRandomPrompt(prompts[randomIndex]); // Set the random prompt
    };

    const defNoPressed = () => {
        setNoPressed(true);
    };

    // Countdown logic
    useEffect(() => {
        if (timerPressed && timeLeft > 0) {
            const intervalId = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);

            return () => clearInterval(intervalId); // Clean up the interval on unmount or when timer ends
        } else if (timeLeft === 0) {
            setShowModal(false); // Close modal when time is up
        }
    }, [timerPressed, timeLeft]);

    const navigate = useNavigate();

    const handleYesClick = () => {
        navigate('/robot');
    }

    // Convert time in seconds to HH:MM:SS format
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Trigger the disappearance of the button after 1 second
    useEffect(() => {
        if (dispressed) {
            const timer = setTimeout(() => {
                setHideButton(true);  // Set state to trigger disappearing class
            }, 1000);  // Wait for 1 second before making the button disappear

            return () => clearTimeout(timer); // Clean up the timeout
        }
    }, [pressed]);

    return (
        <>
            <h1 align="center">Welcome to the Unsubscribe Page!</h1>

            <div className="instruction-pane">
                <p>
                    Welcome to the Unsubscribe Page for Safety reasons the Yes button is disabled <br></br> if you are not a robot try to find the button to go to the next page
                </p>
            </div>

            <div className="button-placement">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <button type="button" onClick={checkButton}>No</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={defNoPressed}>Definitely No!</button>
                                {noPressed && window.close()}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" onClick={timerButton}>Not Sure, give me an hour!</button>
                                {showModal && (
                                    <div className="modal">
                                        <div className="modal-content">
                                            <h2>Timer Started</h2>
                                            <p>Time Left: {formatTime(timeLeft)}</p>
                                        </div>
                                    </div>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button
                                    type="button"
                                    className={`disappearName ${hideButton ? 'disappear' : ''}`} // Add "disappear" class when needed
                                >
                                    Yes
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="transparent-button">
                <button type="button" onClick={handleYesClick}>Yes</button>
            </div>
            {pressed && (
                <div className="random-prompt">
                    <h2>{randomPrompt}</h2>
                </div>
            )}
        </>
    );
};

export default Home;
