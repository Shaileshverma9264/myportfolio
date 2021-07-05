import react, { useEffect } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// particle using npm packages
import Particles from 'react-particles-js';
import Navbar from "./component/Navbar";
import Header from './component/Header';
import About from './component/About';
import Skills from './component/Skills';
import Project from './component/Project';
import Pdata from './component/Pdata';
import Footer from './component/Footer';
import Mainfooter from "./component/Mainfooter";
import Certificate from './component/Certificate';



// const nCard = (val) => {
//   return (

//     <Project
//       key={val.id}

//       title={val.title}
//       about_project={val.about_project}
//       data_target={val.data_target}
//     />
//   );
// }
const loader = document.querySelector(".preloader");

const showLoader = () => loader.classList.remove("preloader");
const addClass = () => loader.classList.add("loader-hide");


const App = () => {
  useEffect(() => {
    showLoader();
    addClass();
  }, []);

  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "star",
              stroke: {
                width: 6,
                color: "#f9ab00"
              },
            }
          }
        }} />

      <Navbar />
      <Header />
      <About />
      <Skills />
      {/* {Pdata.map(nCard)} */}
      <Certificate />

      <Project />
      <Mainfooter />
      <Footer />

    </>
  );

}

export default App;
