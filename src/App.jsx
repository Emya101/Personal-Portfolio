import {Routes, Route} from 'react-router-dom';
import {Layout} from "./Components/Layout";
import { Navigation } from './Components/Navigation';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Footer } from './Components/Footer';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
      </Route>
    </Routes>
  )
}

export default App
