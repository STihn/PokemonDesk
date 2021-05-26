import React from 'react';
import Header from '../../components/Header';

interface ILegendariesProps {
  title?: string;
}

const Legendaries: React.FC<ILegendariesProps> = ({ title }) => {
  return (
    <React.Fragment>
      <Header />
      <div>{title}</div>
    </React.Fragment>
  );
};
export default Legendaries;
