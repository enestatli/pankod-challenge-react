import { useSearchMedia } from '../../hooks';

export const SearchBar = () => {
  const { handleSubmit, handleChange } = useSearchMedia();

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder=" Search..." onChange={handleChange} />
      <button>
        <img src="/" />
      </button>
    </form>
  );
};
