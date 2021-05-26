import React from 'react';
import Header from '../../components/Header';

interface IDocumentationProps {
  title?: string;
}
const Documentation: React.FC<IDocumentationProps> = ({ title }) => {
  return (
    <React.Fragment>
      <Header />
      <div>{title}</div>
    </React.Fragment>
  );
};

export default Documentation;
