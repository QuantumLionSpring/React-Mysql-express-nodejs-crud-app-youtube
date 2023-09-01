import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css';
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
function App() {
  return (
   <BrowserRouter>
     <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/Create" element={<Create/>}/>
         <Route path="/Read/:id" element={<Read/>}/>
         <Route path="/edit/:id" element={<Update/>}/>
     </Routes>


   </BrowserRouter>
  );
}

export default App;
