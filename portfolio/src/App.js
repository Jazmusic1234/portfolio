import React from 'react';
import { BrowserRouter as Router , Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Jasmine Chen',
      headerLinks: [
          { title: 'Home', path: '/' },
          { title: 'About', path: '/about'},
          { title: 'Education', path: '/education' },
          { title: 'Projects', path: '/projects'},
          { title: 'Extracurriculars', path: '/ec'}
      ],
      home: {
        title: 'Learn with Purpose',
        subtitle: 'Learning new skills while creating meaningful projects',
        text: 'Check out some of my favorites below!'
      },
      about: {
        title: 'About Me'
      },
      education: {
        title: 'Relevant Courses'
      },
      projects: {
        title: 'Projects'
      },
      ec: {
        title: 'Extracurriculars'
      }
    }
  }
  render() {
    return (
      <Router>
        <Container className="p=0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Jasmine Chen</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/education">Education</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/ec">Extracurriculars</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Router>


    );
  }
  
}

export default App;
