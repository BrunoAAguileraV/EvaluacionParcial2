import { Row, Col, Avatar, Typography, Tag, Space } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import TituloSeccion from '../atoms/TituloSeccion.jsx';

const { Title, Text, Paragraph } = Typography;

const DatosPersonales = ({ perfil }) => {
    return (
        <section id="quien-soy" style={{ padding: '40px 0' }}>
            <TituloSeccion titulo="¿Quién soy?" subtitulo="Perfil profesional y competencias" />
            <Row gutter={[32, 32]} align="middle" justify="center">
                <Col xs={24} md={8} style={{ textAlign: 'center' }}>
                    <Avatar
                        size={180}
                        src={perfil.avatar}
                        style={{ border: '4px solid #1677ff', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <div style={{ marginTop: 12 }}>
                        <Text type="secondary">
                            <EnvironmentOutlined /> {perfil.ubicacion}
                        </Text>
                    </div>
                </Col>

                <Col xs={24} md={14}>
                    <Title level={3} style={{ marginBottom: 4 }}>
                        {perfil.nombre}
                    </Title>
                    <Text type="secondary" strong style={{ fontSize: '18px', display: 'block', marginBottom: 16 }}>
                        {perfil.titulo}
                    </Text>
                    <Paragraph style={{ fontSize: '16px', lineHeight: '1.7' }}>
                        {perfil.descripcion}
                    </Paragraph>

                    <div style={{ marginTop: 16 }}>
                        <Text strong style={{ display: 'block', marginBottom: 8 }}>
                            Lenguajes y Herramientas:
                        </Text>
                        <Space size={[0, 8]} wrap>
                            {perfil.habilidadesTecnicas?.map((tecnologia) => (
                                <Tag color="blue" key={tecnologia}>
                                    {tecnologia}
                                </Tag>
                            ))}
                        </Space>
                    </div>

                    <div style={{ marginTop: 16 }}>
                        <Text strong style={{ display: 'block', marginBottom: 8 }}>
                            Habilidades Blandas e Idiomas:
                        </Text>
                        <Space size={[0, 8]} wrap>
                            {perfil.habilidadesBlandas?.map((habilidad) => (
                                <Tag color="cyan" key={habilidad}>
                                    {habilidad}
                                </Tag>
                            ))}
                            {perfil.idiomas?.map((idioma) => (
                                <Tag color="purple" key={idioma}>
                                    {idioma}
                                </Tag>
                            ))}
                        </Space>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default DatosPersonales;