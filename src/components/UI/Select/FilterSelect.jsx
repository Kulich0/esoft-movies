import React from 'react';

const FilterSelect = ({ value, onChange, defaultValue, options }) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};

export default FilterSelect;
