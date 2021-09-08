import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextArea from './component/TextArea';
import {useState} from 'react';
import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [msg,setmsg] = useState(null);
  const [darkmode,setdarkmode] = useState(null);

  const showMessage = (mes,type) => {
    setmsg({
      msg: mes,
      type:type
    })

    setTimeout(() => {
      setmsg(null);
    }, 1500);
  }

  const togglechange = () => {
    if(mode === 'light'){
      setmode('dark');
      setdarkmode(null);
      document.body.style.backgroundColor = '#042743';
      showMessage("Dark mode is activated","success");
    }
    else{
      setmode('light');
      setdarkmode(null);
      document.body.style.backgroundColor = 'white';
      showMessage("Light mode is activated","success");
    }
  }

  const showDarkMode = (dark) => {
    setdarkmode(dark);
  }

  return (
    <>
    {/* <Router> */}
     <Navbar title="TextUtils" mode={mode}  func={togglechange} darkmode={showDarkMode} showMessage={showMessage}/> 
     <Alert alert={msg}/>
        <div className="container my-5">
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
              <TextArea showMessage={showMessage} heading="Enter text below to analyse" mode={mode} darkmode={darkmode} />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}

    </>
  );
}

export default App;
