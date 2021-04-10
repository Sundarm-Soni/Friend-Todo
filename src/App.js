import Header from './components/Header'
import Searchbar from './components/Searchbar';

const App = () => {
  
  return (
    <div className = 'container'>
      <Header title='Friends List'/>
      <Searchbar/>
    </div>
  );
}

export default App;
