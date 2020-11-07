import './App.scss'
import { FoldersBlock } from './components/foldersBlock';
import { GemsBlock } from './components/gemsBlock';
import {Dropdown } from './components/dropdown'
 
function App() {
  return (
    <div className="container">
      <Dropdown/>
      <FoldersBlock />
      <GemsBlock/>
      <button>SAVE</button>
    </div>
  )
}

export default App;
