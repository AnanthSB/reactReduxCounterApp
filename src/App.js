import { useSelector,useDispatch } from 'react-redux';
import { decrement, getName, increment } from './actions';
// import data from './data.json';
import './App.css';
// import changeNumber from './reducers/upDown';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state)=>state.changeNumber);
  return (
    <div className="h-full w-full App flex items-center justify-center ">
      <div className='w-full h-full flex justify-center bg-gray-50'>
        <div className='h-[100vh] flex items-center justify-center flex-col gap-[40px] p-[20px]'>
          {/* <div className='flex flex-col gap-[10px] mb-[10px]'>
            <button onClick={()=>dispatch(getName('Ananth'))}>click me</button>
             <span>Name: {name}</span>
          </div> */}
          <div className='border w-full flex justify-center items-center flex-col gap-[50px]'>
            <span className='border-b'>Redux - Counter App</span>
            <span className='border-b'>{count}</span>
          </div>
          <div className='border w-[400px] flex items-center justify-between'>
            <button className='border rounded-[10px] w-[50px] h-[40px] flex items-center justify-center bg-slate-400 text-white hover:text-black hover:bg-white'
            onClick={()=>dispatch(decrement(5))}>
              -
            </button>
            <button className='border rounded-[10px] w-[50px] h-[40px] flex items-center justify-center bg-slate-400 text-white hover:text-black hover:bg-white'
            onClick={()=>dispatch(increment(5))}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
