//Import Style
import "./css/Main.css";
import "./css/Mobile.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Import Components
import Icon from "./components/Icon";
import Header from "./components/contents/Header";
import Hiring from "./components/contents/Hiring";
import First from "./components/contents/About/First";
import Second from "./components/contents/About/Second";
import Third from "./components/contents/About/Third";
import Wonder from "./components/contents/Wonder";

function App() {
  return (
    <div className="App">
      <Icon />
      <Header />
      <Hiring />
      <First />
      <Second />
      <Third />
      <Wonder />
    </div>
  );
}

export default App;
