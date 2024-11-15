import './App.css';
import { Button } from './components/Button';
import { Sneakers } from './components/Sneakers';

function App() {
  const sneakers = [
    { id: 1, title: 'Adidas', isDone: false },
    { id: 2, title: 'Nike', isDone: true },
    { id: 3, title: 'New Balance', isDone: false },
    { id: 4, title: 'Puma', isDone: true },
    { id: 5, title: 'Reebok', isDone: false },
  ];

  return (
    <div>
      <Button onClick={() => {}} color='red'>
        RED btn
      </Button>
      <br />
      <Button onClick={() => {}}>DEFAULT btn</Button>
      <br />
      <Button onClick={() => {}} color='secondary' disabled={true}>
        DISABLED btn
      </Button>
      <hr />
      <Sneakers sneakers={sneakers}>
        <h3>Page #1</h3>
        <Button onClick={() => {}}>DEFAULT btn</Button>
        <br />
        <Button onClick={() => {}}>DEFAULT btn</Button>
        <br />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <input type='text' placeholder='Your name' />
        <br />
        <textarea name='' id=''></textarea>
      </Sneakers>

      <hr />
      <Sneakers sneakers={sneakers}>
        <h3>Page #2</h3>
        <input type='text' placeholder='Your name' />
        <br />
        <Button onClick={() => {}}>DEFAULT btn</Button>
      </Sneakers>
    </div>
  );
}

export default App;
