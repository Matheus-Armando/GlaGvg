import './TextField.css';
import React from 'react';

interface TextFieldProps {
  label: string;
  placeholder: string;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  return( 
    <div className="text-field">
      <label>{props.label}</label>
      <input type="text" placeholder={`${props.placeholder}...`} />
    </div>
  )
}

export default TextField;