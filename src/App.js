import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/Home";
import ServicesPage from "./pages/Services";
import AppRouter from "./routes/Router";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
