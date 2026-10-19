import { useState } from 'react';
import { Form, message } from 'antd';

//logica y envio de formulario de contacto
const useFormularioContacto = () => {
    const [formulario] = Form.useForm();

    const [enviando, setEnviando] = useState(false);

    //procesar los datos ingresados
    const manejarEnvio = (valores) => {
        setEnviando(true);

        setTimeout(() => {
            //notificacion flotante
            message.success(`¡Gracias ${valores.nombre}! Tu mensaje ha sido enviado con éxito.`);

            //limpia las textbox
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