import { RouterProvider } from 'react-router-dom';
import './App.css';
import './Firebase';
import useGetPerson from './Hooks/useGetPerson';
import router from './Router/Router';


function App() {
  const { data } = useGetPerson();
  // console.log(data);
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
