import React, { Fragment, useState } from 'react';
import _ from 'lodash';
import './App.css';
import 'semantic-ui-css/semantic.css';

import ideas from './data/ideas';

import Nav from './components/Nav/Nav.js'
import Controls from './components/Controls/Controls';
import Idea from './components/Idea/Idea';

function App() {
  const [ idea, setIdea ] = useState(_.sample(ideas))

  const refresh = () => {
    console.log('Refresh');
    
    setIdea(_.sample(ideas));
  }

  return (
    <Fragment>
      <Nav />
      <Controls refresh={refresh}/>
      <Idea idea={idea} />
    </Fragment>
  );
}

export default App;
