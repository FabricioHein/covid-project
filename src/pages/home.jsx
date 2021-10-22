import GeoMap from "../components/map/map"
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const Home = ()=>{

    return(

      <>
      <Navbar />
        <div className='container'>
          <h1>Covid Information</h1>
        </div>
        <main>
        <GeoMap />

        </main>
      <Footer /> 
      </>
      
    )

}

export default Home