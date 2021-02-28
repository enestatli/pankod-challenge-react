import { Card } from './Card';

import './styles.css';

interface Props {}

export const CardList = (props: Props) => {
  return (
    <div className="cardList">
      {[1, 2].map((item, pos) => {
        return <Card key={pos} />;
      })}
    </div>
  );
};
