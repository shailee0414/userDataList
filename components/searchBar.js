import React, { useState } from 'react';



const SearchBar = ({ onChangeText }) => {
    const [input, setInput] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(input);
    };

    return (
        <div className='ui container'>
            <form className='ui form' onSubmit={onFormSubmit}>
                <label>Enter Name</label>
                <input
                    className='input' type='text'
                    name='name'
                    value={input}
                    onChange={e => {
                        setInput(e.target.value);
                        onChangeText(e.target.value);
                       
                    }}
                />
            </form>
            
        </div>
    )
}
export default SearchBar;