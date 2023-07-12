import css from './LoadMore.module.css';

export const LoadMore = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={css.LoadMore} type="button">
      {children}
    </button>
  );
};
