import React from "react";
import { Navbar, Nav, Container, Row, Col, Card } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";
import "./contact.css";


function ContactPage() {
  return (
    <>

      <Container className="mt-5" style={{marginBottom:'100px'}}>
        <Row>
          <Col md={6}>
            <h2>Adresse</h2>
            <Card className="p-3">
              <p>
                <FaMapMarkerAlt /> Immeuble café Rihab, 6eme étage - 60000 Oujda 
              </p>
            </Card>
          </Col>
          <Col md={6}>
            <h2>Contactez nous</h2>
            <Card className="p-3">
              <p>
                <a href="">+212 704-338109</a><FaPhone /> 
              </p>
              <p>
                <a href="">homeofgamiing@gmail.com</a><FaEnvelope /> 
              </p>
              <p>
                <FaInstagram /> @home_of_gaming_48
              </p>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <h2>Trouvez Nous</h2>
            <Card>
              <iframe
                title="Our Location"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.060996493095!2d-1.9212659843297897!3d34.6784099804402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7865f32f74d8c3%3A0x98cffbbb7881d50!2sHome%20of%20gaming!5e0!3m2!1sen!2sma!4v1679681892271!5m2!1sen!2sma`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="bg-dark text-center text-white mt-5 py-3"  style={{marginBottom:'200px'}}>
        <p>&copy; 2023 Home of Gaming. All rights reserved.</p>
      </footer>
    </>
  );
}

export default ContactPage;
