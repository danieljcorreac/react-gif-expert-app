import { useState } from 'react'
import PropTypes from 'prop-types';

type Props = {
    setCategories: React.Dispatch<React.SetStateAction<string[]>>
}

const AddCategory = ({ setCategories }: Props) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.BaseSyntheticEvent) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(prev => [inputValue, ...prev]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes  = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory