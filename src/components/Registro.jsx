import React, { useState } from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";
import { Card, Container } from "react-bootstrap";
// Registro con elementos del programa
const Registro = () => {
    // Estado para manejo de Alerta
    const [alert, setAlert] = useState(null); 
    // Llamado a componentes
    return (
    <div className="d-flex justify-content-center">
        <Card className="rounded-5" style={{ width: '380px',marginTop: "30px"  }}>
            <Card.Body>
            <Container>
            <h1 className="text-center mb-4">Crea una Cuenta</h1>
            <SocialButton
                facebookIcon="https://img.icons8.com/ios-filled/50/facebook-new.png"
                githubIcon="https://img.icons8.com/ios-filled/50/github.png"
                linkedinIcon="https://img.icons8.com/ios-filled/50/linkedin-2--v1.png"
            />
            <h4 className="text-center mt-4">o usa tu email para registrarte</h4>
            <Formulario setAlert={setAlert} />
            {alert && <Alert message={alert.message} color={alert.color} />}
            </Container>
            </Card.Body>
        </Card>
    </div>
  );
};

export default Registro;


