import { Card, Button, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

//tarjeta que muestra el proyecto
const TarjetaProyecto = ({ titulo, descripcion, imagen, urlGithub }) => {
    return (
        <Card
            hoverable
            //imagen de portada
            cover={<img alt={titulo} src={imagen} style={{ height: 180, objectFit: 'cover' }} />}
            //boton que redirecciona al repositorio
            actions={[
                <Button
                    type="link"
                    icon={<GithubOutlined />}
                    href={urlGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    key="repositorio"
                >
                    Ver Repositorio
                </Button>,
            ]}
        >
            <Title level={4}>{titulo}</Title>

            <Paragraph type="secondary" ellipsis={{ rows: 3 }}>
                {descripcion}
            </Paragraph>
        </Card>
    );
};

export default TarjetaProyecto;