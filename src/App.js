import './App.css';
import NavBar from './components/NavBar'
import Main from './components/Main';
import Overview from './components/Overview';
import Feature from './components/Feature';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Tops from './components/Tops';


function App() {
  return (
    <>
      <NavBar/>
     <main>
      <article className="container">
      <Main/>
      <Overview/>
      <Feature/>
      <Blogs/>
      </article>
       </main>
      <Footer/>
      <Tops/>

    </>
  );
}

export default App;
