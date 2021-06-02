import React, {Fragment} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Formulario from './components/Formulario';

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
