import React from 'react';

interface Cat {
  id: string;
  url: string;
}

interface CardGatosProps {
  cats: Cat[];
}

const Cardgatos: React.FC<CardGatosProps> = ({ cats }) => {
  return (
    <div id='carcat' style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginLeft: '130px',}}>
      {cats.map((cat) => (
        <img
          key={cat.id}
          src={cat.url}
          style={{ width: '350px', height: '300px', objectFit: 'cover', marginBottom: '25px'}}
        />
      ))}
    </div>
  );
};

export default Cardgatos;
