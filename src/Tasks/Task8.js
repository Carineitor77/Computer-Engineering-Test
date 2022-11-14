import { useState } from 'react';
import {Container} from 'react-bootstrap';

import photo from '../photo/task8.png';

const Task8 = () => {
    const [u, setU] = useState();
    const [n, setN] = useState();
    const [answer, setAnswer] = useState();

    function getAnswer() {
        setAnswer(answer => u / n);
    }

    return (
        <Container>
            <img src={photo} alt="Task 8"></img><br/>
            <div className="form-group">
                <input type="number" placeholder="U" className="form-control" 
                    onChange={(e) => setU(u => e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="number" placeholder="n" className="form-control" 
                    onChange={(e) => setN(n => e.target.value)}/>
            </div>
            <button onClick={getAnswer} className='btn btn-outline-success mt-3 btn_style'>Get answer</button>
            <div>
                Answer: {answer}
            </div>
        </Container>
    );
}

export default Task8;