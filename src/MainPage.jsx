import React, { useState } from 'react';
import './index.css';
import Header from '../src/Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

function MainPage() {

  const [addItem,setAddItem]=useState([]);

  const addNote=(note)=>{
    //alert("clicekd"+note);
    setAddItem((prevData)=>{
      return[...prevData,note];
    });
    console.log(note);
  };
const onDelete=(id)=>{
  
  setAddItem((oldData)=>
    oldData.filter((currentData,idx)=>{
      return idx!==id;
    })
  );
}

  return (
    <div>
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((val,index)=>{
        return <Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
        />
      })}
      <Footer />
    </div>
  );
}

export default MainPage;