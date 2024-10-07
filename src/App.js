import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import BootSequence from './components/BootSequence';
import Terminal from './components/Terminal';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<BootSequenceWrapper />} />
                <Route path='/terminal' element={<Terminal />} />
            </Routes>
        </Router>
    );
}

const BootSequenceWrapper = () => {
    const navigate = useNavigate();

    const handleEnter = () => {
        navigate('/terminal'); 
    };

    return <BootSequence onEnter={handleEnter} />;
};

export default App;
