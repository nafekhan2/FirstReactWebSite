import React, { useEffect, useState } from 'react';

const EffectDemo = () => {

    const [num, setNum] = useState(0);
    useEffect(()=>{
        document.title=`you clickecd me ${num} times`;
    });
    const buttonClickDemo = () => {
       setNum(num+1);
    };
    return (
        <>
            <div>
                <h1>Use effect demo</h1>
                <button onClick={buttonClickDemo}>Click Me {num}</button>
            </div>
        </>
    );
};

export default EffectDemo;