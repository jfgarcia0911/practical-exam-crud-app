import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Create from './components/Create';
import { useState } from 'react';
import Home from './components/Home';
import { useEffect } from 'react';
import { getContacts } from '../http';
import Edit from './components/Edit';

function App() {
    const [contacts, setContacts] = useState()
    const [isUpdated, setIsUpdated] = useState(false)

    useEffect(() => {
        const getData = async () => {
            const res = await getContacts()
            setContacts(res)
        }

        getData()

    }, [isUpdated])

    const handleUpdate = () => {
        setIsUpdated(prev => !prev)
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home contacts={contacts} handleUpdate={handleUpdate} />} />
                <Route path="/create" element={<Create handleUpdate={handleUpdate} />} />
                <Route path="/edit/:id" element={<Edit handleUpdate={handleUpdate} contacts={contacts} />} />
            </Routes>
        </Router>
    );
    
    
}

export default App;
