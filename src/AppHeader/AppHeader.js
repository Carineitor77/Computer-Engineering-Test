
import {Link, NavLink} from 'react-router-dom';

const AppHeader = () => {
    return (
        <div>
            <div className="bg-dark text-white p-2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col navbar-brand">Тести Комп'ютерна Інженерія</div>
                        <div className="mb-3">
                            <h4>Тести: </h4>
                            <NavLink to="/" className="btn btn-outline-secondary">
                                Home
                            </NavLink><br/>
                            <NavLink to="/task1" className="btn btn-outline-secondary">
                                Task 1
                            </NavLink>
                            <NavLink to="/task2" className="btn btn-outline-secondary">
                                Task 2
                            </NavLink>
                            <NavLink to="/task3" className="btn btn-outline-secondary">
                                Task 3
                            </NavLink>
                            <NavLink to="/task4" className="btn btn-outline-secondary">
                                Task 4
                            </NavLink>
                            <NavLink to="/task5" className="btn btn-outline-secondary">
                                Task 5
                            </NavLink>
                            <NavLink to="/task6" className="btn btn-outline-secondary">
                                Task 6
                            </NavLink>
                            <NavLink to="/task7" className="btn btn-outline-secondary">
                                Task 7
                            </NavLink>
                            <NavLink to="/task8" className="btn btn-outline-secondary">
                                Task 8
                            </NavLink>
                            <NavLink to="/task9" className="btn btn-outline-secondary">
                                Task 9
                            </NavLink>
                            <NavLink to="/task10" className="btn btn-outline-secondary">
                                Task 10
                            </NavLink>
                            <NavLink to="/task11" className="btn btn-outline-secondary">
                                Task 11
                            </NavLink>
                            <NavLink to="/task12" className="btn btn-outline-secondary">
                                Task 12
                            </NavLink>
                            <NavLink to="/task13" className="btn btn-outline-secondary">
                                Task 13
                            </NavLink>
                            <NavLink to="/task14" className="btn btn-outline-secondary">
                                Task 14
                            </NavLink>
                            <NavLink to="/task15" className="btn btn-outline-secondary">
                                Task 15
                            </NavLink>
                            <NavLink to="/task16" className="btn btn-outline-secondary">
                                Task 16
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppHeader;