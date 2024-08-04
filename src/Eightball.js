import React, { useState } from "react";
import "./Eightball.css";
import answerChoices from "./answers.json";
import { choice } from "./random";

function Eightball({ answers = answerChoices }) {
    const [answer, setAnswer] = useState({
        msg: "Think of a question...",
        color: "black",
    });

    function handleClick(e) {
        setAnswer(choice(answers));
    }

    return (
        <div className="Eightball" onClick={handleClick} style={{ backgroundColor: answer.color }}>
            <b>{answer.msg}</b>
        </div>
    );
}

export default Eightball;