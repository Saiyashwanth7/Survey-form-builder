import React, { useState } from 'react';

const FormBuilder = () => {
    const [formFields, setFormFields] = useState([{ id: Date.now(), label: '', type: 'text' }]);

    const handleFieldChange = (id, event) => {
        const newFields = formFields.map(field => {
            if (field.id === id) {
                return { ...field, [event.target.name]: event.target.value };
            }
            return field;
        });
        setFormFields(newFields);
    };

    const addField = () => {
        setFormFields([...formFields, { id: Date.now(), label: '', type: 'text' }]);
    };

    const removeField = (id) => {
        setFormFields(formFields.filter(field => field.id !== id));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formFields);
    };

    return (
        <form onSubmit={handleSubmit}>
            {formFields.map(field => (
                <div key={field.id}>
                    <input
                        type="text"
                        name="label"
                        placeholder="Field Label"
                        value={field.label}
                        onChange={(e) => handleFieldChange(field.id, e)}
                    />
                    <select
                        name="type"
                        value={field.type}
                        onChange={(e) => handleFieldChange(field.id, e)}
                    >
                        <option value="text">Text</option>
                        <option value="number">Number</option>
                        <option value="email">Email</option>
                        <option value="textarea">Textarea</option>
                    </select>
                    <button type="button" onClick={() => removeField(field.id)}>Remove</button>
                </div>
            ))}
            <button type="button" onClick={addField}>Add Field</button>
            <button type="submit">Submit Form</button>
        </form>
    );
};

export default FormBuilder;