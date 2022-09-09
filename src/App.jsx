import './App.scss';
// Added components/children
import Header from './components/Header/Header';
import Main from './components/Main/Main';

// Main Container
const App = () => {

  return (
    <div className="App">
        <Header/>
        <Main/>
    </div>
  );
}

export default App;
