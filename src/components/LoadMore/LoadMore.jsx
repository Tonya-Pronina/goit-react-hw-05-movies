import css from './LoadMore.module.css';

const LoadMore = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={css.LoadMore} type="button">
      {children}
    </button>
  );
};

export default LoadMore;
