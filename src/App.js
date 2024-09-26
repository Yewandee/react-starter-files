import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import RoutesSystem from './routes/routes';
import { AuthProvider } from './services/context/AuthProvider';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<RoutesSystem />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;