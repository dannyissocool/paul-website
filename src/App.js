
import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  const [dark, setDark] = useState(false)
 

  const changeMode = () => {
    setDark(!dark)
  }
 

  return (
    <><Navbar dark={dark} setDark={changeMode} />
      <Switch>       
        <Route exact path='/' dark={dark} render={(props) => <Hero {...props} dark={dark} />} />
        <Route path='/gallery' dark={dark} render={(props) => <Gallery {...props} dark={dark} />} />
        <Route path='/contact' render={(props) => <Contact {...props} dark={dark} />} />
      </Switch>
    </>

    
  );
}

export default App;
