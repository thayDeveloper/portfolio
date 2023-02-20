import "./App.css";
import Header from "./components/Header/Header";
import Home from "./home/Home";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  );
}

export default App;
