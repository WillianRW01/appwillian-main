import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <Container>
        <Row>
          <Col lg={4} sm={12}>
            <div>
              <h4>Sobre minha empresa</h4>
              <p>Av Visconde de Taunay 777777</p>
              <p>Telefone: (11) 1234-5678</p>
              <p>Email: contato@minhaempresa.com</p>
              <p>Horário de Atendimento: 9h - 18h</p>
            </div>
          </Col>
          <Col lg={4} sm={12}>
            <div>
              <h4>Links Úteis</h4>
              <p><a href="/">Página Inicial</a></p>
              <p><a href="/sobre">Sobre nós</a></p>
              <p><a href="/produtos">Produtos</a></p>
              <p><a href="/contato">Contato</a></p>
            </div>
          </Col>
          <Col lg={4} sm={12}>
            <div>
              <h4>Redes Sociais</h4>
              <p>
                <a href="//facebook.com" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </p>
              <p>
                <a href="//instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </p>
              <h4>Newsletter</h4>
              <Form>
                <Form.Group controlId="formNewsletterEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Digite seu email" />
                </Form.Group>
                <Button variant="primary" type="submit">Inscrever-se</Button>
              </Form>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p className="text-center">© 2024 Minha Empresa - Todos os direitos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
