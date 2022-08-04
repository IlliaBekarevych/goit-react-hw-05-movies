import { useState, useEffect } from 'react';
import s from './index.module.css';
import PropTypes from 'prop-types';

function SearchBar({ onSubmit }) {
  const [value, setValue] = useState('');
  const state = window.location.search.split('=')[1];

  useEffect(() => {
    if (state) {
      setValue(state);
      return;
    }
    setValue('');
  }, [state]);

  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <div className={s.searchBar}>
      <form onSubmit={onFormSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus={true}
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Search movies"
        />
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
