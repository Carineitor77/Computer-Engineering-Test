import { useState } from 'react';
import {Container} from 'react-bootstrap';

import photo from '../photo/task1.png';

const Task1 = () => {
    const [uz, setUz] = useState();
    const [unp, setUnp] = useState();
    const [inp, setInp] = useState();
    const [answer, setAnswer] = useState();

    function getAnswer() {
        const g = inp * 0.001;
        const res = (uz - unp) / g;

        setAnswer(answer => res);
    }

    return (
        <Container>
            <img src={photo} alt="Task 1"></img><br/>
            <div className="form-group">
                <input type="number" placeholder="Uж" className="form-control" 
                    onChange={(e) => setUz(uz => e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="number" placeholder="Uпр" className="form-control" 
                    onChange={(e) => setUnp(unp => e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="number" placeholder="Іпр" className="form-control" 
                    onChange={(e) => setInp(inp => e.target.value)}/>
            </div>
            <button onClick={getAnswer} className='btn btn-outline-success mt-3 btn_style'>Get answer</button>
            <div>
                Answer: {answer}
            </div>
        </Container>
    );
}

export default Task1;