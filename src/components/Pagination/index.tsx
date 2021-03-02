import { useHistory } from 'react-router-dom';

import './styles.css';

interface IProps {
  value: number;
  onChange: (n: number) => any;
  range: number;
  mediaType?: string;
}

export const Pagination = ({ value, onChange, range, mediaType }: IProps) => {
  const history = useHistory();
  const pattern = Array.from({ length: range }, (_, i) => i + 1);

  function changeNumber(n: number) {
    if (typeof n === 'number' && n > 0 && n <= range) {
      history.push(`/series/${n}`);
      mediaType === 'movie' && history.push(`/movies/${n}`);
      onChange(n);
    }
  }
  return (
    <div className="pagination-container">
      <div className="pagination">
        {pattern.map((label) => (
          <button
            key={label}
            className={value === label ? 'active' : ''}
            onClick={() => changeNumber(label)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};
