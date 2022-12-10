import logo from './logo.svg';
import './App.css';
import Profile from "./profile/Profile"

function App() {
    const eventHandler = ( name) => {

      alert (name)
    }
  return (
    <div className="App">
      <Profile title="Yasmine" text="bonjour" textButton="view" age={18} eventHandler={eventHandler}><img src="photo.jpg" alt="my Photo" style={{width:"200px"}}></img></Profile>
      <Profile/>
    </div>
  );
}

export default App;
