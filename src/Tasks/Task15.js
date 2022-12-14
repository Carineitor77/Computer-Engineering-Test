import { useState } from 'react';
import {Container} from 'react-bootstrap';

import photo from '../photo/task15.png';

const Task15 = () => {
    const [f, setF] = useState(false);
    const [g, setG] = useState(false);
    const [s, setS] = useState(false);
    const [m, setM] = useState(false);
    const [answer, setAnswer] = useState();

    function getAnswer() {
        if (f == false && g == true && s == true && m == false) {
            setAnswer(answer => 6);
        } else if (f == false && g == true && s == true && m == true) {
            setAnswer(answer => 7);
        } else if (f == true && g == false && s == false && m == false) {
            setAnswer(answer => 8);
        } else if (f == true && g == false && s == false && m == true) {
            setAnswer(answer => 9);
        } else if (f == false && g == false && s == false && m == false) {
            setAnswer(answer => 10);
        } else {
            setAnswer(answer => 0);
        }
    }

    return (
        <Container>
            <img src={photo} alt="Task 15"></img><br/>
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

export default Task15;