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
        <div className='mx-auto mb-12'>
          <div className='text-2xl text-center my-6'>The Land I love</div>
          <div className='mx-10'>
            <div className='text-center my-4'>Daorainou Ramainou soupeiyu Ateidei,
            Teidei haina kohai Enou kusha lou hoe;
            Teikhai ne taho teidei haina ko doupeio,
            Leshishoe, ngailouhoe, eh Poumai teideihai
            </div>
            
            <div className='text-center'>Khoras</div>
            <div className='text-center my-4'>
            Deiphaohi Enou tasühao-a zhuphaki,
            Eh Poumai teidei haina bü-a ngaomohie;
            Reiko vaosüü, ngaire, kheko vourei kübue,
            Poupahnou sühao bue, Poumai teidei hisü.
            </div>
            
            <div className='text-center my-4'>
            Deichinou zhikhai moa teidei haina khoa bue,
            Dzünghounou thekhai moa Poumainah ki-a bue;
            Teikhainou sokhaimoa putao le sousabue,
            Teinghei-a lounümoa puh kihi loutare.
            </div>

            <div className='text-center my-4'>
            Poumai kipei hinou küpayu vourei rei,
            Mail thethe kücho-a mai thethe vai-a bue;
            Vourei nehi mainou neki nouyu phaki,
            Akihai Poumai teideihi bue tea paopeio.
            </div>

            <div className='text-center my-4'>
            Daorai paipao maiwo peide-peiva hrübue,
            Ana zhou etao Khrista donou reih zülai;
            Holo hailo hrü-a buyu Poumai hrülai,
            Sokhaiso, tavelo, leroli soulaikhe.
            </div>
            </div>
        </div>
      </div>

    </div>
  );
}

export default App;
