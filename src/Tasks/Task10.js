import { useState } from 'react';
import {Container} from 'react-bootstrap';

import photo from '../photo/task10.png';

const Task10 = () => {
    const [f, setF] = useState(false);
    const [g, setG] = useState(false);
    const [answer, setAnswer] = useState();

    function getAnswer() {
        const a = !f;
        const b = !g;

        if (a == false && b == false) {
            setAnswer(answer => '0001');
        } else if (a == true && b == true) {
            setAnswer(answer => '1000');
        } else if (a == true && b == false) {
            setAnswer(answer => '0100');
        } else if (a == false && b == true) {
            setAnswer(answer => '0010');
        }
    }

    return (
        <Container>
            <img src={photo} alt="Task 10"></img><br/>
            <label>X1</label>
            <input className="form-check-input" type="checkbox" 
                onChange={(e) => setF(f => e.target.checked )}/>
            <label>X2</label>
            <input className="form-check-input" type="checkbox"
                onChange={(e) => setG(g => e.target.checked )}/><br/>
            <button onClick={getAnswer} className='btn btn-outline-success mt-3 btn_style'>Get answer</button>
            <div>
                Answer: {answer}
            </div>
        </Container>
    );
}

export default Task10;