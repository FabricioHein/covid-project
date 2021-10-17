import '../src/App.css'
import '../src/index.css'

import GeoMap from '../src/components/map/map'
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <GeoMap />
      <Footer />

    </div>

  );
}

export default App;
