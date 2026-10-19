import { Button } from 'antd';

//boton reutilizable
const ButtonRedSocial = ({ icono, etiqueta, enlace }) => {
    return (
        <Button
            type="default"
            icon={icono}
            href={enlace}
            target="_blank"             //abre el enlace en una nueva pestaña
            rel="noopener noreferrer"
            size="large"
            block
        >
            {etiqueta}
        </Button>
    );
};

export default ButtonRedSocial;