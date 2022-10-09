
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Home from './component/Home/Home';
import Order from './component/Order/Order';
import Product from './component/Product/Product';
import Shop from './component/Shop/Shop';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: () => fetch('tshirt.json'),
          element: <Home />
        },
        {
          path: '/shop',
          element: <Shop />
        },
        {
          path: '/order',
          element: <Order />
        },
        {
          path: '/product',
          element: <Product />
        },
        {
          path: '/about',
          element: <About />
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
