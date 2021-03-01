import { useFilter } from '../../../hooks';
import './styles.css';

export const Filter = () => {
  const { handleChange } = useFilter();
  return (
    <form className="filter-form">
      <select name="sort" onChange={handleChange}>
        <option value="desc_year">Year Descending</option>
        <option value="asc_year">Year Ascending</option>
        <option value="desc_title">Title Descending</option>
        <option value="asc_title">Title Ascending</option>
      </select>
      <img src="/down-arrow.svg" alt="down arrow" />
    </form>
  );
};
