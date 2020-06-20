import React, { Fragment, useState } from 'react';
import _ from 'lodash';
import './App.css';
import 'semantic-ui-css/semantic.css';

import ideas from './data/ideas';
import colors from './data/colors'
import fonts from './data/fonts'

import Controls from './components/Controls/Controls';
import Idea from './components/Idea/Idea';
import Colors from './components/Colors/Colors';
import Fonts from './components/Fonts/Fonts'

function App() {
  const [ idea, setIdea ] = useState(_.sample(ideas))
  const [ colorPalette, setColorPalette ] = useState(_.sample(colors))
  const [ families, setFamilies ] = useState(_.sample(fonts))

  const refresh = () => {
    setIdea(_.sample(ideas));
    setColorPalette(_.sample(colors));
    setFamilies(_.sample(fonts))
  }

  return (
    <div className="App">
      <Controls refresh={refresh}/>
      <Idea idea={idea} />
      <Colors colors={colorPalette} />
      <Fonts fonts={families} />
    </div>
  );
}

export default App;
