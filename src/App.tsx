import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import TranscriptApplication from './screens/transcriptApplication';
import TranscriptRequests from './screens/transcriptRequests';
import TranscriptTreated from './screens/transcriptTreated';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TranscriptRequests/>}/>
        <Route path='/transcript-application' element={<TranscriptApplication/>}/>
        <Route path='/transcript-treated' element={<TranscriptTreated/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
