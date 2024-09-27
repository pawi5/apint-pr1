import './App.css';
import { useState } from 'react'
import Element from './Elements/element';

// Todolista z możliwaściami:
// - dodawania zadania do zrobienia
// - usuwania zadania do zrobienia
// - wyszukiwania zadań

function App() {
  const initialList = [
    "Wynieść śmieci",
    "Zrobić projekt",
    "Wysłać projekt"
  ]
  const [todo, setTodo] = useState(initialList);
  const [search, setSearch] = useState("");

  return (
    <div className='main'>
      <div className='cos'>
    <>
      <input
        onChange={(event) => {
            const value = event.target.value;
            setSearch(value);
          }
        }
      />
      <ul>
      { todo
      .filter((element) => element.toLowerCase().includes(search.toLowerCase()))
      .map((element) => (
        <Element setTodo={setTodo}>{element}</Element>
      ))
      }
      </ul>
      <form>
        <input></input>
        <button 
          type="submit"
          onClick={e => {
            e.preventDefault();
            // tak się dodaje:
            setTodo([...todo, e.target.previousElementSibling.value]);
          }}
        >
        dodaj todo
        </button>
      </form>
    </>
    </div>
    </div>
  );
}

export default App;