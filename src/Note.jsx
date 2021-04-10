import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';



const Note=(props)=>{

    const deleteNote=()=>{
    console.log("Selecetd not "+props.id);
       props.deleteItem(props.id);
    }

    return(
        <>
        <div className='note'>
        <h1>{props.title}</h1>
        <br/>
        <p>{props.content}</p>
            <Button className="btn" onClick={deleteNote}>
                <DeleteOutlineIcon className='deleteicon'/>
            </Button>
        </div>
        </>
    );
};

export default Note;
