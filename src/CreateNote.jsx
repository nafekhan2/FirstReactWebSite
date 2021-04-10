import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const CreateNote = (props) => {

    const [note, setNote] = useState(
        {
            title: '',
            content: ''
        }
    );

    const inputEvent = (event) => {
        //console.log("value " + event.target.value);
        //console.log("name " + event.target.name);

        const { name, value } = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        });
    };

    const AddEvent = () => {
        props.passNote(note);
        setNote({
            title: '',
            content: ''
        });
    }
    return (<>
        <div className="main_note">
            <form>
                <input type="text" name="title" value={note.title} onChange={inputEvent} placeholder="Title" autoComplete="off" />
                <textarea rows="" name="content" column="" value={note.content} onChange={inputEvent} placeholder="Write a note.." />
                <Button className="primary" onClick={AddEvent}>
                    <AddIcon />
                </Button>
            </form>
        </div>
    </>);
};

export default CreateNote;