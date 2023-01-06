import './App.css';
import f1 from "./images/m1.jpeg";
import f2 from "./images/m2.jpeg";
import f3 from "./images/m3.jpeg";


function App() {
  return (
    <div className="App">
     <div className='slider'>
        <div className='slidetrack'>
          <div className='slide'>
            <img src= {f1} />
          </div>
          <div className='slide'>
            <img  src= {f2} />
          </div>
          <div className='slide'>
            <img  src={f3} />
          </div>

          <div className='slide'>
            <img  src= {f1} />
          </div>
          <div className='slide'>
            <img  src= {f2} />
          </div>
          <div className='slide'>
            <img  src={f3} />
          </div>
          <div className='slide'>
            <img  src= {f1} />
          </div>
          <div className='slide'>
            <img  src= {f2} />
          </div>
          <div className='slide'>
            <img src={f3} />
          </div>
          



        </div>

     </div>
    </div>
  );
}

export default App;
