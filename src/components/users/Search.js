import React, {useState} from 'react'

const Search = ({searchUsers, setAlert, clearUser}) => {
  const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
           setAlert('Please enter something', 'light')
        } else {
            searchUsers(text);
            setText('')
        }
    }

    const ClearUser = () => {
        clearUser('');
        setText('')
    }

    return (
        <div>
            <form className='form' onSubmit={onSubmit}>
                <input type='text' name='text' placeholder='Search' value={text}
                    onChange={onChange} />
                <input type='Submit' value='Search' className='btn btn-dark btn-block' />
                <input type='button' onClick={ClearUser} value='Clear' className='btn btn-light btn-block' />
            </form>
        </div>
    )

}

export default Search
