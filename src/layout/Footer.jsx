import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <Container>
        <Row>
          <Col lg={4} sm={12}>
            <div>
              <h4>Sobre minha empresa</h4>
              <p>Av Visconde de Taunay 777777</p>
            </div>
          </Col>
          <Col lg={8} sm={12}>
            <div>
              <h4>Redes sociais</h4>
              <p>
                <a href="//facebook.com" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </p>
              <p>Instagram</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}