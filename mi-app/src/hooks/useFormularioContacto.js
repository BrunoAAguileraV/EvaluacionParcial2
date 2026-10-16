import { useState } from 'react';
import { Form, message } from 'antd';

const useFormularioContacto = () => {
    const [formulario] = Form.useForm();
    const [enviando, setEnviando] = useState(false);

    const manejarEnvio = (valores) => {
        setEnviando(true);
        setTimeout(() => {
            message.success(`¡Gracias ${valores.nombre}! Tu mensaje ha sido enviado con éxito.`);
            formulario.resetFields();
            setEnviando(false);
        }, 800);
    };

    return {
        formulario,
        enviando,
        manejarEnvio,
    };
};

export default useFormularioContacto;