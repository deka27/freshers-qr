import './App.css';
import a from '../src/assets/a.jpg'
import b from '../src/assets/b.jpg'
import c from '../src/assets/c.jpg'
import d from '../src/assets/d.jpg'
import e from '../src/assets/e.jpg'
import f from '../src/assets/f.jpg'

function App() {
  return (
    <div className="App">

       <div className='flex flex-col gap-4 mx-auto'>
      <div className='side_1 mx-auto'>
        <img src={a} alt='a'></img>
      </div>
      <div className='side_2 mx-auto'>
        <img src={b} alt='b'></img>
      </div>
      <div className='side_3 mx-auto'>
        <img src={c} alt='c'></img>
      </div>
      <div className='side_4 mx-auto'>
        <img src={f} alt='f'></img>
      </div>
      <div className='side_5 mx-auto'>
        <img src={e} alt='e'></img>
      </div>
      <div className='side_6 mx-auto'>
        <img src={d} alt='d'></img>
      </div>
      </div>
      
    </div>
  );
}

export default App;
