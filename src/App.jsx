import { useEffect, useState} from 'react';
import { getTodos } from './lib/supabase/todos';

export default function App() {
  //query the data
  const [todos, setTodos] = useState([])
  const [error, setError] = useState('')


  useEffect(() => {
    getTodos()
    .then(setTodos)
    .catch((err) => setError(err.message))
  }, []);

  return (
    <main>
      <h1>Todo App</h1>
      {error ? <p role="alert">{error}</p> 
      : <pre>{JSON.stringify(todos, null, 2)}</pre>}
    </main>
  )

}
