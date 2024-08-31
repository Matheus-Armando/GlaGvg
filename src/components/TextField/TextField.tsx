import React from 'react';

interface TextFieldProps {
  label: string;
  placeholder: string;
  className?: string;
}

const TextField: React.FC<TextFieldProps> = ({ label, placeholder, className }) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>
  );
};

export default TextField;