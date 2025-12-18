import React, {useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import supabaseClient from '../supabaseClient'


function  Note ()  {
    const {id} = useParams();
    const navigate = useNavigate();
     const[note, setNote] = useState(null);
     const[content,setContent] = useState("");
     const[saving,setSaving]= useState(false);

     useEffect(() => {
        async function fetchNote() {

            const{data, error} = await supabaseClient
            .from("notes")
            .select("*")
            .eq("id", id)
            .single();
            if(error) { 
                 console.log(error)
                 navigate("/notes")
            }
                else{
            setNote(data)
            setContent(data.content || "");
            }
        }
        fetchNote();
     }, [id,navigate]);
     async function saveNote(){
         e?.preventDefault();
        setSaving(true)
        const{error} = await supabaseClient
        .from("notes")
        .update({content})
        .eq("id",id)

    if(error) console.log(error)
        setSaving(false);
     }
     if (!note) return <p>Loading Note...</p>
  return (
   <div>
    <h1>{note.title}</h1>
    <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={12}>
     </textarea>
     <button onClick={(e) => navigate(-1)}>Back</button>
     <button onClick={saveNote} disabled={saving}>
        {saving ?  "Saving..." : "Save"}
     </button>
   </div>
  )
}
export default Note;