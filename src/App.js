import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/Home";
import ServicesPage from "./pages/Services";
import AppRouter from "./routes/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
