import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/Home";
import ServicesPage from "./pages/Services";
import AppRouter from "./routes/Router";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
