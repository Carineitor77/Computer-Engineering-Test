import { useState } from 'react';
import {Container} from 'react-bootstrap';

const Task4 = () => {
    const [a, setA] = useState(false);
    const [answer, setAnswer] = useState();

    function getAnswer() {
        const d = !a;

        if (d == true) {
            setAnswer(answer => true);
        } else {
            setAnswer(answer => false);
        }
    }

    return (
        <Container>
            <img src="./photo/task4.png" alt="Task 4"></img><br/>
            <label>A:</label>
            <input className="form-check-input" type="checkbox" 
                onChange={(e) => setA(a => e.target.checked )}/><br/>
            <button onClick={getAnswer} className='btn btn-outline-success mt-3 btn_style'>Get answer</button>
            <div>
                Answer: {answer == true ? 1 : 0}
            </div>
        </Container>
    );
}

export default Task4;