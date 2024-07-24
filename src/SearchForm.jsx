import { useState } from "react";
import { useGlobalContext } from "./Context";


const SearchForm = () => {
    const { setSearch } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault()
        let inputValue = e.target.elements.search.value;
        if (!inputValue) return
        setSearch(inputValue);

    }

    return (
        <div className="form-container">
            <h1>unsplash images</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="search" autoFocus placeholder="Cats" />
                <button type="submit" className="form-btn">Search</button>
            </form>
        </div>
    )
}

export default SearchForm;