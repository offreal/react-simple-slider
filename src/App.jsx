import Slides from "./components/Slides";

const App = ({ slides }) => {
  return (
    <div className="App">
      <Slides slides={slides} />
    </div>
  );
}

export default App;
