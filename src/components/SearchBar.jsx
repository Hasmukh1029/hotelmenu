import { FiSearch, FiX } from 'react-icons/fi';

function SearchBar({ value, onChange }) {
  return (
    <label className="search-bar">
      <FiSearch aria-hidden="true" />
      <span className="sr-only">Search menu items</span>
      <input type="search" value={value} onChange={(event) => onChange(event.target.value)} placeholder="Search paneer, chicken, rice..." />
      {value && <button type="button" onClick={() => onChange('')} aria-label="Clear search"><FiX /></button>}
    </label>
  );
}

export default SearchBar;
