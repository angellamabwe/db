import { Fragment } from 'react';
import classes from './App.module.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navigation from './components/Navigation';

function App() {
  return (
    <Fragment>
      <Navigation />
      <Main />
      <Footer />
    </Fragment>

  );
}

export default App;
