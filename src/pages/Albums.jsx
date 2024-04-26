import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Albums = () => {
  return (
    <div>
      <Card style={{}}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Astroworld</Card.Title>
          <Card.Text>
            O quarto álbum de estúdio do rapper americano Travis Scott, lançado em 2018.
          </Card.Text>
          <Card.Text>
            Artista: Travis Scott
          </Card.Text>
          <Button variant="primary">Ver Álbum</Button>
          <Button variant="secondary">Ouvir</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Albums;
