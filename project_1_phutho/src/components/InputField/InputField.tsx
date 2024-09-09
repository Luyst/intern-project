import React from 'react';

interface InputFieldProps {
    label: string;
    type: string;
    name: string;
    value?: string;
    placeholder?: string;
    options?: { label: string; value: string }[]; // For select, radio buttons
    onChange: any;
    isTextArea?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    type,
    name,
    value,
    placeholder,
    options,
    onChange,
    isTextArea,
}) => {
    return (
        <div className="mb-4 text-gray-600">
            <label className="block  font-semibold  text-lg mb-1">{label}</label>
            {/* TextArea */}
            {isTextArea ? (
                <textarea
                    name={name}
                    className="w-full p-2 min-h-40 rounded-lg outline-blue-500"
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    required
                />
            ) : (
                <>
                    {/* Select Input */}
                    {type === 'select' && options ? (
                        <select
                            name={name}
                            value={value}
                            className="w-full p-2 rounded-lg outline-blue-500"
                            onChange={onChange}
                            required
                        >
                            <option value="">{placeholder}</option>
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    ) : type === 'radio' && options ? (
                        <div className="flex space-x-4">
                            {options.map((option) => (
                                <label key={option.value} className="flex items-center">
                                    <input
                                        type="radio"
                                        name={name}
                                        value={option.value}
                                        checked={value === option.value}
                                        onChange={onChange}
                                        className="mr-2"
                                        required
                                    />
                                    {option.label}
                                </label>
                            ))}
                        </div>
                    ) : (
                        // Regular Input (text, email, file, etc.)
                        <input
                            type={type}
                            name={name}
                            value={value}
                            className="w-full  p-2 rounded-lg outline-blue-500"
                            placeholder={placeholder}
                            onChange={onChange}
                            required
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default InputField;
