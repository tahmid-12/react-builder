// import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Layout from './Layout';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />}/>
      <Route path="contact-us" element={<ContactUs />}/>

      <Route path="*" element={<NotFound />}/>
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
