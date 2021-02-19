import { useEffect, useState } from 'react';
import useStore from 'store';
import './SearchInput.css';

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleInputChange = e => setSearchTerm(e.target.value);
  const handleFormSubmit = e => {
    e.preventDefault();
    return false;
  };

  const fetch = useStore(state => state.fetch);

  useEffect(() => {
    fetch(searchTerm);
  }, [fetch, searchTerm]);

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleFormSubmit}>
        <label
          className="search-label"
          htmlFor="search-input"
          aria-label="Search input"
        >
          Search for Pictures:
        </label>
        <input
          className="search-input"
          name="search-input"
          value={searchTerm}
          onChange={handleInputChange}
        ></input>
      </form>
    </div>
  );
}

export default SearchInput;
