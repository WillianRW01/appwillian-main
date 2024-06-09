import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import laptop from '../img/laptop.jpg'; 
import foneblot from '../img/fone.jpeg';
import mousegms from '../img/mousebra.jpg';
import tecladoGms from '../img/tecla.webp';
import pcgames from '../img/pcgms.jpg';

export default function Inicial() {
  const handleParcelasClick = (preco) => {
    alert(`Opções de parcelas para o preço de R$${preco}:\n3x de R$${(preco / 3).toFixed(2)}\n6x de R$${(preco / 6).toFixed(2)}\n12x de R$${(preco / 12).toFixed(2)}`);
  };

  const produtos = [
    {
      nome: 'fone bluetooth',
      descricao: 'Headphones de alta qualidade com cancelamento de ruído.',
      imagem: foneblot ,
      preco: 300,
    },
    {
      nome: 'Mouse',
      descricao: 'Mouse ergonômico com alta precisão.',
      imagem: mousegms ,
      preco: 150,
    },
    {
      nome: 'Teclado',
      descricao: 'Teclado mecânico com iluminação RGB.',
      imagem: tecladoGms,
      preco: 250,
    },
    {
      nome: 'PC Gamer',
      descricao: 'Computador gamer de última geração.',
      imagem: pcgames,
      preco: 5000,
    },
    {
      nome: 'Laptop',
      descricao: 'Laptop potente e portátil para todas as suas necessidades.',
      imagem: laptop,
      preco: 3500,
    },
  ];

  return (
    <Container fluid style={{ backgroundColor: 'gray', minHeight: '100vh', padding: '2rem' }}>
      <Row className="justify-content-center text-center">
        <Col>
          <h1>Bem-vindo à TechShop</h1>
          <p>
            A TechShop é a sua loja tecnológica definitiva, oferecendo uma ampla variedade de produtos tecnológicos,
            desde headphones e mouses até computadores e laptops de última geração. Com produtos de alta qualidade,
            preços competitivos e uma experiência de compra excepcional, a TechShop é o seu destino ideal para todas as
            suas necessidades tecnológicas.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center text-center mt-4">
        <h2>Nossos Produtos</h2>
        {produtos.map((produto, index) => (
          <Col xs={12} md={4} className="mb-4" key={index}>
            <Card>
              <Card.Img variant="top" src={produto.imagem} />
              <Card.Body>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Text>{produto.descricao}</Card.Text>
                <Card.Text>Preço: R${produto.preco}</Card.Text>
                <Button variant="primary" onClick={() => handleParcelasClick(produto.preco)}>Ver Parcelas</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
