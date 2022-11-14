import { useState } from 'react';
import {Container} from 'react-bootstrap';

const Task13 = () => {
    const [f, setF] = useState(false);
    const [g, setG] = useState(false);
    const [s, setS] = useState(false);
    const [m, setM] = useState(false);
    const [answer, setAnswer] = useState();

    function getAnswer() {
        if (f == false && g == false && s == false && m == true) {
            setAnswer(answer => 1);
        } else if (f == false && g == false && s == true && m == false) {
            setAnswer(answer => 2);
        } else if (f == false && g == false && s == true && m == true) {
            setAnswer(answer => 3);
        } else if (f == false && g == true && s == false && m == false) {
            setAnswer(answer => 4);
        } else if (f == false && g == true && s == false && m == true) {
            setAnswer(answer => 5);
        }
    }

    return (
        <Container>
            <img src="./photo/task13.png" alt="Task 13"></img><br/>
            <label>"8"</label>
            <input className="form-check-input" type="checkbox" 
                onChange={(e) => setF(f => e.target.checked )}/>
            <label>"4"</label>
            <input className="form-check-input" type="checkbox"
                onChange={(e) => setG(g => e.target.checked )}/>
            <label>"2"</label>
            <input className="form-check-input" type="checkbox"
                onChange={(e) => setS(s => e.target.checked )}/>
            <label>"1"</label>
            <input className="form-check-input" type="checkbox"
                onChange={(e) => setM(m => e.target.checked )}/><br/>
            <button onClick={getAnswer} className='btn btn-outline-success mt-3 btn_style'>Get answer</button>
            <div>
                Answer: {answer}
            </div>
        </Container>
    );
}

export default Task13;