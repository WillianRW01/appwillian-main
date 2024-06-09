import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import headphoneImg from '../img/fonegame.webp'; 
import mouseGame from '../img/mouse.jpeg';
import tecladoMec from '../img/teclado.jpg';
import pcGame from '../img/pcgamer.jpg';
import notGamer from '../img/notgamer.jpg';
import playStation from '../img/ps5.jpg';
import smartCell from '../img/phone.jpg';
import tabletes from '../img/tablet.jpg';
import smarWatch from '../img/smart.jpg'; 
import camerafull from '../img/camera4k.jpg'; 
import monitorLindo from '../img/monitor4k.webp'; 
import caixaSom from '../img/caixa.jpg'; 

const Tecnologia = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      title: "Headphone",
      description: "Headphone com cancelamento de ruído ativo e som de alta fidelidade.",
      price: 199.99,
      installments: 12,
      imageUrl: headphoneImg 
    },
    {
      title: "Mouse Gamer",
      description: "Mouse gamer com alta precisão e iluminação RGB.",
      price: 79.99,
      installments: 10,
      imageUrl: mouseGame
    },
    {
      title: "Teclado Mecânico",
      description: "Teclado mecânico com switches rápidos e duráveis, ideal para jogos.",
      price: 129.99,
      installments: 8,
      imageUrl: tecladoMec
    },
    {
      title: "PC Gamer",
      description: "PC gamer com processador de última geração e placa gráfica potente.",
      price: 1999.99,
      installments: 24,
      imageUrl: pcGame
    },
    {
      title: "Notebook",
      description: "Notebook leve e potente, ideal para trabalho e lazer.",
      price: 1299.99,
      installments: 18,
      imageUrl: notGamer
    },
    {
      title: "Smartphone",
      description: "Smartphone com câmera de alta resolução e bateria de longa duração.",
      price: 999.99,
      installments: 12,
      imageUrl: smartCell
    },
    {
      title: "Tablet",
      description: "Tablet com tela de alta definição e excelente desempenho.",
      price: 499.99,
      installments: 12,
      imageUrl: tabletes
    },
    {
      title: "Smartwatch",
      description: "Smartwatch com monitoramento de atividades físicas e notificações.",
      price: 299.99,
      installments: 12,
      imageUrl: smarWatch
    },
    {
      title: "Câmera Digital",
      description: "Câmera digital com lente intercambiável e alta resolução.",
      price: 899.99,
      installments: 12,
      imageUrl: camerafull
    },
    {
      title: "Monitor 4K",
      description: "Monitor 4K com cores vibrantes e alta taxa de atualização.",
      price: 599.99,
      installments: 12,
      imageUrl: monitorLindo
    },
    {
      title: "Caixa de Som Bluetooth",
      description: "Caixa de som Bluetooth com som estéreo e bateria de longa duração.",
      price: 149.99,
      installments: 10,
      imageUrl: caixaSom
    },
    {
      title: "Console de Videogame",
      description: "Console de videogame de última geração com gráficos incríveis.",
      price: 499.99,
      installments: 12,
      imageUrl: playStation
    }
  ];

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'gray'
      }}>
        {products.map((product, index) => (
          <Card key={index} style={{
            margin: '20px',
            width: '400px'
          }}>
            <Card.Img style={{
              width: '100%',
              height: '400px'
            }} variant="top" src={product.imageUrl} />
            <Card.Body style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '250px',
              backgroundColor: 'gray'
            }}>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button variant="primary" onClick={() => handleShowModal(product)}>Ver Parcelas e Preço</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {selectedProduct && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Preço: R${selectedProduct.price.toFixed(2)}</p>
            <p>Parcelas: {selectedProduct.installments}x de R${(selectedProduct.price / selectedProduct.installments).toFixed(2)}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Fechar</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Tecnologia;
