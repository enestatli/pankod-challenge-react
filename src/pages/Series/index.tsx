import { SeriesList } from '../../components';

import './styles.css';

const Series = () => {
  return (
    <div>
      {/* <InputBar /> */}
      <section className="series limit-width">
        <SeriesList />
      </section>
    </div>
  );
};

export default Series;
