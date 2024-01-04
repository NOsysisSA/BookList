import Form from './components/Form/Form';
import List from './components/List/List';
import Filter from './components/Filter/Filter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='header'></header>
      <h1>Book library</h1>
      <div className='rightSide'>
        <div className='form'>
          <Form/>
        </div>
      </div>
      <div className='leftSide'>
        <div className='filter'>
          <Filter/>
        </div>
        <div className='list'>
          <List/>
        </div>
      </div>
    </div>
  );
}

export default App;
