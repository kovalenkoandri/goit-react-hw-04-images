import css from './Searchbar.module.css';
export const Searchbar = ({ handleSubmit }) => (
  <header className={css.Searchbar}>
    <form className="form" onSubmit={handleSubmit}>
      <button type="submit" className="button">
        <span className="button-label">Search</span>
      </button>

      <input
        name="input"
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);
