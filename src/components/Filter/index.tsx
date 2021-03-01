import { useFilter } from '../../hooks';

export const Filter = () => {
  const { handleChange } = useFilter();
  return (
    <form>
      <select name="sort" onChange={handleChange}>
        <option value="desc_year">Year Descending</option>
        <option value="asc_year">Year Ascending</option>
        <option value="desc_title">Title Descending</option>
        <option value="asc_title">Title Ascending</option>
      </select>
    </form>
  );
};
