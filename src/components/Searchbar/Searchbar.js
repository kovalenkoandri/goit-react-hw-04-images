import css from './Searchbar.module.css';
export const Searchbar = ({ handleSubmit }) => (
  <header className={css.Searchbar}>
    <form className={css.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={css['SearchForm-button']}>
        <span>Search</span>
      </button>

      <input
        name="input"
        className={css['SearchForm-input']}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);
