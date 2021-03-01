import { useSearchMedia } from '../../../hooks';
import './styles.css';

export const SearchBar = () => {
  const { handleSubmit, handleChange } = useSearchMedia();

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input type="search" placeholder=" Search..." onChange={handleChange} />
      <button>
        <img src="/magnifier.svg" alt="magnifier" />
      </button>
    </form>
  );
};
