import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: Option[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, selectedOptions, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    if (selectedOptions.includes(value)) {
      onChange(selectedOptions.filter(option => option !== value));
    } else {
      onChange([...selectedOptions, value]);
    }
  };

  return (
    <div className="relative mb-4">
      <div
        className="border px-3 py-2 cursor-pointer bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-300 rounded-md shadow-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOptions.length > 0
          ? selectedOptions.map(option => options.find(o => o.value === option)?.label).join(', ')
          : 'Select options'}
      </div>
      {isOpen && (
        <div className="absolute border mt-1 bg-white dark:bg-gray-700 w-full z-50 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {Array.isArray(options) && options.map(option => (
            <div
              key={option.value}
              className={`px-3 py-2 cursor-pointer ${selectedOptions.includes(option.value) ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-300'}`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;