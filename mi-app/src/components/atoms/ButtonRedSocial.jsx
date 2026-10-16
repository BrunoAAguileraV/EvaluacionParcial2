import React from 'react';
import { Button } from 'antd';

const ButtonRedSocial = ({ icono, etiqueta, enlace }) => {
    return (
        <Button
            type="default"
            icon={icono}
            href={enlace}
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            block
        >
            {etiqueta}
        </Button>
    );
};

export default ButtonRedSocial;