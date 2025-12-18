// import React, { useState,useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import supabaseClient from '../supabaseClient';
// import { SupabaseClient } from '@supabase/supabase-js';

// function Notesview()  {
//     const navigate = useNavigate();
//     const [title, setTitle] = useState("");
//     const [notes, setNotes] = useState([]);


//     useEffect(() => {
//         async function fetchNotes() {
//             const { data, error } = await supabaseClient
//                 .from("notes")
//                 .select("*")
//                 .order("created_at", { ascending: false })


//             if (error) console.log(error)
//             else setNotes(data);

//         }
//         fetchNotes();


//     }, []);

//     async function createNote(e) {
//         e.preventDefault();
//         if (!title.trim()) return;

//         const { data, error } = await supabaseClient
//             .from("notes")
//            .insert([{ title, content: '' }])
//             .select("*")
//             .single();

//         if (error || !data) {
//             console.log(error)
        
//         }
//           //setNotes([data, ...notes])
//         //  setTitle('')  
        
//             setNotes((prev) => [data, ...prev])
//              navigate(`/note/${data.id}`);

        
//     }
//     async function deleteNote(id,e) {
//         e.preventDefault();
//         const {error} = await supabaseClient
//         .from("notes")
//         .delete()
//         .eq("id",id)


//     if(error){
//         console.log(error)
//         return;

//     }
//     setNotes((prev)=> prev.filter((note) => note.id!==id));
//      }

//     return (
//         <div>
//             {notes.length == 0 && <p>No Notes...</p>}
//             <ul>
//                 {notes.map((note) => (
//                     <>
//                         <li key={note.id} onClick={() => navigate('/note/${note.id}')}>
//                             {note.title}
//                         </li>
//                         <button onClick={(e) => deleteNote(note.id, e)}>Delete</button>
//                     </>
//                 ))}
//             </ul>
//             <form onSubmit={createNote}>
//                 <input type="text" placeholder="Title..." value={title} onChange={(e) => setTitle(e.target.value)} />
//                 <button type="submit"> Create note</button>
//             </form>
//         </div>
//     )
// }
// export default Notesview;




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import supabaseClient from "../supabaseClient";

function NotesView() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const { data, error } = await supabaseClient
        .from("notes")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error(error);
      else setNotes(data);
    }

    fetchNotes();
  }, []);

  async function createNote(e) {
    e.preventDefault();
    if (!title.trim()) return;

    const { data, error } = await supabaseClient
      .from("notes")
      .insert([{ title, content: "" }])
      .select("*")
      .single();

    if (error) {
      console.error(error);
      return;
    }

    setNotes((prev) => [data, ...prev]);
    navigate(`/note/${data.id}`);
  }

  async function deleteNote(id, e) {
    e.preventDefault();
    const { error } = await supabaseClient.from("notes").delete().eq("id", id);
    if (error) {
      console.error(error);
      return;
    }
    setNotes((prev) => prev.filter((note) => note.id !== id));
  }

  return (
    <div>
      {notes.length === 0 && <p>No notes..</p>}
      <ul>
        {notes.map((note) => (
          <>
            <li key={note.id} onClick={() => navigate(`/note/${note.id}`)}>
              {note.title}
            </li>
            <button onClick={(e) => deleteNote(note.id, e)}>Delete</button>
          </>
        ))}
      </ul>
      <form onSubmit={createNote}>
        <input
          type="text"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Create note</button>
      </form>
    </div>
  );
}

export default NotesView;