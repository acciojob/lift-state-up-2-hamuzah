import React, {useState} from 'react';
import Child from './Child';


const Parent = () => {
    const[inputValue, setInputValue] = useState('')
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }


    return(
        <div className='parent'>
            <Child inputValue={inputValue} handleInputChange={handleInputChange} /> 
            <p> inputValue : {inputValue}</p>
         
        </div>

    )
}

export default Parent