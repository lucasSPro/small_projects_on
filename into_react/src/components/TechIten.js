import React from 'react';
import PropTypes from 'prop-types';

function TechIten ({tech, onDelete}){
    return (
        <li >
        {tech}
        <button onClick= {onDelete}type="button" >remove</button>
    </li>
    );
    
}

TechIten.defaultProps = {
    tech: 'Oculto',
};

TechIten.propTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
}

export default TechIten;