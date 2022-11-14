import { useState } from 'react';
import {Container} from 'react-bootstrap';

const Task6 = () => {
    const [u, setU] = useState();
    const [r1, setR1] = useState();
    const [r2, setR2] = useState();
    const [answer, setAnswer] = useState();

    function getAnswer() {
        setAnswer(answer => (u * r1) / (r1 + r2));
    }

    return (
        <Container>
            <img src="./photo/task6.png" alt="Task 6"></img><br/>
            <div className="form-group">
                <input type="number" placeholder="U" className="form-control" 
                    onChange={(e) => setU(u => e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="number" placeholder="R1" className="form-control" 
                    onChange={(e) => setR1(r1 => e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="number" placeholder="R2" className="form-control" 
                    onChange={(e) => setR2(r2 => e.target.value)}/>
            </div>
            <button onClick={getAnswer} className='btn btn-outline-success mt-3 btn_style'>Get answer</button>
            <div>
                Answer: {answer}
            </div>
        </Container>
    );
}

export default Task6;