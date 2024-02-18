import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';

const SocialButton = ({ facebookIcon, githubIcon, linkedinIcon }) => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row className="socialIconsContainer">
        <Image className="m-2 rounded-circle border border-dark" src={facebookIcon} alt="Facebook" width="50" height="50" />
        <Image className="m-2 rounded-circle border border-dark" src={githubIcon} alt="Github" width="50" height="50" />
        <Image className="m-2 rounded-circle border border-dark" src={linkedinIcon} alt="LinkedIn" width="50" height="50" />
      </Row>
    </Container>
  );
}

export default SocialButton;