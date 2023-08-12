import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searched } from '../../features/filter/filterSlice';

const Search: React.FC = () => {

    const dispatch = useDispatch();
    const {search} = useSelector((state: any) => state.filter);

    const [input, setInput] = useState<any>(search);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(searched(input))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    className="outline-none border-none mr-2"
                    type="search"
                    name="search"
                    placeholder="Search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </form>
        </>
    )
}

export default Search