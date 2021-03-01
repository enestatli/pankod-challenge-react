import { Filter } from './Filter';
import { SearchBar } from './SearchBar';
import './styles.css';

const InputBar = () => (
  <section className="input-bar limit-width">
    <SearchBar />
    <Filter />
  </section>
);

export { InputBar };
