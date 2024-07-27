import React from 'react';


const Child = ({inputValue, handleInputChange}) => {

    return (
        <div className='child'>
            <h1>Child Component</h1>
            <input type='text' value={inputValue} onChange={handleInputChange} />
        </div>
    );
}

export default Child;                                   