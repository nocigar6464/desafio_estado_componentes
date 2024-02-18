import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = ({ setAlert }) => {
    // State para guardar info de los campos
    const [nameForm, setNameForm] = useState('');
    const [emailForm, setEmailForm] = useState(''); 
    const [passFirst, setPassFirst] = useState('');
    const [passConfirm, setPassConfirm] = useState('');
    // Validacion del Formulario
    const validateData = (e) => { 
        e.preventDefault();
        
        if (!nameForm.trim() || !emailForm.trim() || !passFirst.trim() || !passConfirm.trim()) {
            setAlert({ message: '¡Todos los campos son obligatorios!', color: 'warning' });
            return;
        }

        if (!/\S+@\S+\.\S+/.test(emailForm)) {
            setAlert({ message: '¡Formato de Email Incorrecto!', color: 'warning' });
            return;
        }
        if (passFirst.length < 6 || passConfirm.length < 6) {
            setAlert({ message: '¡La contraseña debe tener al menos 6 caracteres!', color: 'danger' });
            return;
        }

        if (passFirst !== passConfirm) {
            setAlert({ message: '¡Las contraseñas no coinciden!', color: 'danger' });
            return;
        }

        setAlert({ message: '¡Formulario enviado exitosamente!', color: 'success' });

        setNameForm('');
        setEmailForm('');
        setPassFirst('');
        setPassConfirm('');
    };
    // Formulario
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
            </Form>
        </div>
    );
};

export default Formulario;
