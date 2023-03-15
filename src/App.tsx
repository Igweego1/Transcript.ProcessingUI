import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import TranscriptApplication from './screens/transcriptApplication';
import TranscriptRequests from './screens/transcriptRequests';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TranscriptRequests/>}/>
        <Route path='/transcript-application' element={<TranscriptApplication/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
