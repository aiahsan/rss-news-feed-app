import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home'
import Img from './images/diuyxb.jpeg'

function App() {
  return (
    <Home img={Img} subheading="Lagerhalle in Kassel abgebrannt - Teile des Daches eingestürzt" description="Der Großbrand in der Lagerhalle eines Gartenbaubetriebs in Kassel ist gelöscht. Es besteht nun allerdings Einsturzgefahr. Ein Feuerwehrmann wurde bei dem Einsatz am Sonntag verletzt." date="Mittwoch, 03. March"/>
  );
}

export default App;
