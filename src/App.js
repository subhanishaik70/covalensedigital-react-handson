import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,useNavigate } from 'react-router-dom';
import FeedbackForm from './Components/FeedbackForm';
import ResultFeedback  from './Components/ResultFeedback';

 

function App() {

  return (
      <div className="App">
         <BrowserRouter>
         <Routes>
        <Route exact path ='/' element={<FeedbackForm/>}></Route>
        <Route  path ='/result' element={<ResultFeedback/>}></Route>
        </Routes>
         </BrowserRouter>
        
     </div>
  );
}

export default App;
