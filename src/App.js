
import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Services from './Components/Services';
import About from './Components/About';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
import Consultancy from './Components/Consultancy';
import Courses from './Components/Courses';
import RecentNews from './Components/RecentNews';
import PostDetail from './Components/PostDetail';
import CoursesDetail from './Components/CoursesDetail';
function App() {
  return (
   
    <div className="App">
       <>
       <Navbar />
      <Routes >

          <Route  path="/" element={<Home/>}/>
          <Route  path="/services" element={<Services/>}/>
          <Route  path="/about" element={<About/>}/>
          <Route  path="/contact" element={<ContactUs />}/>
          <Route  path="/consultancy" element={<Consultancy />}/>
          <Route  path="/courses" exact element={<Courses />}/>
          <Route  path='/course/:id' exact element={<CoursesDetail />}/>
          <Route  path="/recentNews" exact element={<RecentNews />}/>
          <Route  path='/details/:id' exact element={<PostDetail />}/>

         
        </Routes>
  <Footer />
     </>
    </div>
  );
}

export default App;
