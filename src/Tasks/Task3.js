import { useState } from 'react';
import {Container} from 'react-bootstrap';

import photo from '../photo/task3.png';

const Task3 = () => {
    const [a, setA] = useState(false);
    const [b, setB] = useState(false);
    const [c, setC] = useState(false);
    const [answer, setAnswer] = useState();

    function getAnswer() {
        const d = a ^ b ^ c;
        
        if (d == true) {
            setAnswer(answer => true);
        } else {
            setAnswer(answer => false);
        }
    }

    return (
        <Container>
            <img src={photo} alt="Task 3"></img><br/>
            <label>A:</label>
            <input className="form-check-input" type="checkbox" 
                onChange={(e) => setA(a => e.target.checked )}/>
            <label>B:</label>
            <input className="form-check-input" type="checkbox"
                onChange={(e) => setB(b => e.target.checked )}/>
            <label>C:</label>
            <input className="form-check-input" type="checkbox"
                onChange={(e) => setC(c => e.target.checked )}/><br/>
            <button onClick={getAnswer} className='btn btn-outline-success mt-3 btn_style'>Get answer</button>
            <div>
                Answer: {answer == true ? 1 : 0}
            </div>
        </Container>
    );
}

export default Task3;