import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = () => {
    //Estados del formulario
    const [nameForm, setNameForm] = useState('');
    const [emailForm, setEmailForm] = useState(''); 
    const [passFirst, setPassFirst] = useState('');
    const [passConfirm, setPassConfirm] = useState('');

    const [error, setError] = useState(false);

    const validateData = (e) => { 
        e.preventDefault();
        //Validación
        if (nameForm === '' || emailForm === '' || passFirst === '' || passConfirm === '') {
            setError(true);
            return;
        }
        setError(false);
        setNameForm('');
        setEmailForm('');
        setPassFirst('');
        setPassConfirm('');
    };

    return (
        <div>
            <Form onSubmit={validateData}>
                    <Form.Group className="mb-3" controlId="nameForm">
                        <Form.Control type="text" placeholder="Nombre" value={nameForm} onChange={(e) => setNameForm(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="emailForm">
                        <Form.Control type="email" placeholder="tuemail@ejemplo.com" value={emailForm} onChange={(e) => setEmailForm(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="passFirst">
                        <Form.Control type="password" placeholder="Contraseña" value={passFirst} onChange={(e) => setPassFirst(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="passConfirm">
                        <Form.Control type="password" placeholder="Confirmar Contraseña" value={passConfirm} onChange={(e) => setPassConfirm(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Button type="submit" variant="success" style={{ width: '100%' }}>Registrarse</Button>
                    </Form.Group>

                    <Form.Group className="mb-3" style={{ height: '50px' }}>
                    {error ? (
                    <Badge bg="warning" className="d-flex align-items-center justify-content-center" style={{ height: '100%', width: '100%' }}>
                        Todos los campos son obligatorios
                    </Badge>
                    ) : null}
                    </Form.Group>
            </Form>
        </div>
    );
};

export default Formulario;

