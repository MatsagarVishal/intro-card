import "./App.css";

function App() {
  return (
    <div className="card">
      <ProfilePhoto />
      <Intro />
      <Skill />
    </div>
  );
}

export default App;

function ProfilePhoto() {
  return <img className="photo" src="profileimg.jpg" alt="cant load content" />;
}

function Intro() {
  return (
    <div className="data">
      <h1>Vishal Matsagar</h1>
      <p>
        To learn and gain new experience while utilizing my interpersonal skills
        to help achieve business goals. Excellent analytical and developmental
        skills for a software engineer role. Looking to work for a dynamic
        organization with opportunities for career growth. Quick learner and
        problem solver.
      </p>
    </div>
  );
}

function Skill() {
  return (
    <div className="Skills">
      <span className="skill" style={{ backgroundColor: "#60DAFB" }}>
        Javascirpt
      </span>
      <span className="skill" style={{ backgroundColor: "#E84F33" }}>
        HTML & CSS
      </span>
      <span className="skill" style={{ backgroundColor: "#C3DCAF" }}>
        Java
      </span>
      <span className="skill" style={{ backgroundColor: "#FF3B00" }}>
        C++
      </span>
      <span className="skill" style={{ backgroundColor: "#C3DCAF" }}>
        Web developer
      </span>
    </div>
  );
}
