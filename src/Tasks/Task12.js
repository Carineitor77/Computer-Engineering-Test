import { useState } from 'react';
import {Container} from 'react-bootstrap';

const Task12 = () => {
    const [f, setF] = useState(false);
    const [g, setG] = useState(false);
    const [s, setS] = useState(false);
    const [answer, setAnswer] = useState();

    function getAnswer() {
        const a = !f;
        const b = !g;

        if (a == false && b == false) {
            setAnswer(answer => '1110');
        } else if (a == true && b == true) {
            setAnswer(answer => '0111');
        } else if (a == true && b == false) {
            setAnswer(answer => '1011');
        } else if (a == false && b == true) {
            setAnswer(answer => '1101');
        }
        if (s == false) {
            setAnswer(answer => '0000');
        }
    }

    return (
        <Container>
            <img src="../src/photo/task12.png" alt="Task 12"></img><br/>
            <label>X1</label>
            <input className="form-check-input" type="checkbox" 
                onChange={(e) => setF(f => e.target.checked )}/>
            <label>X2</label>
            <input className="form-check-input" type="checkbox"
                onChange={(e) => setG(g => e.target.checked )}/>
            <label>W</label>
            <input className="form-check-input" type="checkbox"
                onChange={(e) => setS(s => e.target.checked )}/><br/>
            <button onClick={getAnswer} className='btn btn-outline-success mt-3 btn_style'>Get answer</button>
            <div>
                Answer: {answer}
            </div>
        </Container>
    );
}

export default Task12;