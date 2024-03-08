import React, { useState } from "react";

function CreateArea(props) {

const [isExtended, setExtended] = useState(false)

const [note, setNote] = useState({
  title: '',
  content: ''
})

  function handleChange(e) {
    const {name, value} = e.target
    setNote(prevNote=>{
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(e) {
    props.onAdd(note)
    setNote({
      title: '',
      content: ''
    })
    e.preventDefault()
  }

  function extend() {
    setExtended(true)
  }
    return (
        <div>
          <form className="create-note">
            {isExtended && <input name='title' onChange={handleChange} value={note.title} placeholder="Title"/>}
            <textarea onClick={extend} name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." cols="20" rows={isExtended ? "3" : '1'}></textarea>
            <button onClick={submitNote}>ADD</button>
          </form>
        </div>
      );
}

export default CreateArea