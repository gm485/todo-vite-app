import { Link, Route, Routes } from 'react-router';
import TodosPage from './pages/TodosPage';
import PriorityTodosPage from './pages/PriorityTodosPage';

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">All todos</Link>
        {' | '}
        <Link to="/priority">Priority todos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TodosPage />} />
        <Route path="/priority" element={<PriorityTodosPage />} />
      </Routes>
    </>
  );
}
