import React from 'react'

const Button = ({col, onColorChange}) => {
    const handleClick = () => {
        onColorChange(col);
      };
    
    return(
        <button
            className="outine-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: col }}
            onClick={handleClick}
        >{col}</button>
    )
}

export default Button