import React from 'react';

import './styles.css';

interface IProps {
  title: string;
  imgUrl: string;
}

const Card = ({ title, imgUrl }: IProps) => {
  return (
    <div className="card">
      <img src={imgUrl} alt="Movie sign" />
      <p className="card-p">{title}</p>
    </div>
  );
};

export { Card };
