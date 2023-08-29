import './_Reset.scss';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/header/Header';
import MainRoute from './router/MainRoute';
// import gsapAnimation from './utils/gsapAnimation';
import gsapSection from './utils/gsapSection';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // gsapAnimation();
    gsapSection();
  },[]);

  return (
    <div className="App">

      <BrowserRouter>
        

        <Routes>
          
          <Route path="/" element={ <Header /> }>
            
            <Route path="/" element={ <MainRoute /> } />

          </Route>


        </Routes>

      </BrowserRouter>
      
      {/* <Header /> */}
      

    </div>
  );
}

export default App;
