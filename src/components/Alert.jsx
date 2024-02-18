import React from 'react';

const Alert = () => {
    return (
        <div>
        {/* Aquí iría el componente de alerta para mostrar mensajes al usuario */}
        <div className='alertEmailWrong'>¡EL formato del email es Incorrecto!</div>
        <div className='alertCompleteAllFields'>¡Existen campos vacíos!</div>
        <div className='alertPasswdNotSame'>¡Las contraseñas no coinciden!</div>
        <div className='alertRedSuccess'>¡Las contraseñas no coinciden!</div>



    </div>
    );
}

export default Alert;