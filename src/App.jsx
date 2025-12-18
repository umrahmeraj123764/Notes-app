import React from 'react'
import Note from './pages/Note'
import Notesview from './pages/Notesview'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Notesview />}/>
      <Route path="/note/:id" element={<Note />}/>
    </Routes>
    </>
  );
}

export default App;