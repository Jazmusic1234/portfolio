import React from 'react';
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
      <div>Hello World</div>
    );
  }
  
}

export default App;
