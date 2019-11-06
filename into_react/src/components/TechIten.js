import React from 'react';

function TechIten ({tech, onDelete}){
    return (
        <li >
        {tech}
        <button onClick= {onDelete}type="button" >remove</button>
    </li>
    );
    
}

export default TechIten;