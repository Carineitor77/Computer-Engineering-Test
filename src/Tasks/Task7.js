import { useState } from 'react';
import {Container} from 'react-bootstrap';

const Task7 = () => {
    const [uvh, setUvh] = useState();
    const [uvuh, setUvuh] = useState();
    const [r1, setR1] = useState();
    const [answer, setAnswer] = useState();

    function getAnswer() {
        setAnswer(answer => (r1 * uvuh) / (uvh - uvuh));
    }

    return (
        <Container>
            <img src="../src/photo/task7.png" alt="Task 7"></img><br/>
            <div className="form-group">
                <input type="number" placeholder="Uвх" className="form-control" 
                    onChange={(e) => setUvh(uvh => e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="number" placeholder="Uвих" className="form-control" 
                    onChange={(e) => setUvuh(uvuh => e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="number" placeholder="R1" className="form-control" 
                    onChange={(e) => setR1(r1 => e.target.value)}/>
            </div>
            <button onClick={getAnswer} className='btn btn-outline-success mt-3 btn_style'>Get answer</button>
            <div>
                Answer: {answer}
            </div>
        </Container>
    );
}

export default Task7;