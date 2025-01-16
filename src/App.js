import "./App.css";
import ProfilePhoto from "./ProfilePhoto";
import Intro from "./Intro";
import Skills from "./Skills";
function App() {
  return (
    <div className="card">
      <ProfilePhoto />
      <Intro />
      <Skills />
    </div>
  );
}

export default App;
