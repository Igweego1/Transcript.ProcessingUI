import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import TranscriptRequests from './screens/transcriptRequests';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TranscriptRequests/>}/>



      </Routes>
    </Router>
   
  );
}

export default App;
