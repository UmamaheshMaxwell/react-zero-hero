import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

const Home = () => <div>Welcome Home</div>
const About = () => <div>About Indiamart</div>
const Contact = () => <div>Contac US at below details</div>
const ErrorPage = () => <div>Page Not Found</div>

function Routing() {
    return (
        <Router>
                <div className="container">
                    {/* <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul> */}

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                    <Link className= "navbar-brand" to="/">India Mart</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route path="/" exact><Home /></Route>
                    <Route path="/about"><About /></Route>
                    <Route path="/contact"><Contact /></Route>
                    <Route path="*"><ErrorPage /></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Routing
