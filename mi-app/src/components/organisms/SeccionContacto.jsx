import { Form, Input, Button, Card, Space, Row, Col } from 'antd';
import { GithubOutlined, LinkedinOutlined, SendOutlined } from '@ant-design/icons';
import TituloSeccion from '../atoms/TituloSeccion.jsx';
import ButtonRedSocial from '../atoms/ButtonRedSocial.jsx';
import useFormularioContacto from '../../hooks/useFormularioContacto.js';

const { TextArea } = Input;

const SeccionContacto = () => {
    const { formulario, enviando, manejarEnvio } = useFormularioContacto();

    return (
        <section id="contacto" style={{ padding: '40px 0' }}>
            <TituloSeccion titulo="Contacto" subtitulo="Conecta conmigo o envíame un mensaje" />
            <Row gutter={[32, 32]} justify="center">
                <Col xs={24} md={8} style={{ textAlign: 'center' }}>
                    <Card title="Redes Sociales" bordered={false}>
                        <Space direction="vertical" style={{ width: '100%' }} size="middle">
                            <ButtonRedSocial
                                icono={<GithubOutlined />}
                                etiqueta="GitHub"
                                enlace="https://github.com/BrunoAAguileraV"
                            />
                            <ButtonRedSocial
                                icono={<LinkedinOutlined />}
                                etiqueta="LinkedIn"
                                enlace="https://www.linkedin.com/in/bruno-aguilera-108344440/?isSelfProfile=true"
                            />
                        </Space>
                    </Card>
                </Col>

                <Col xs={24} md={14}>
                    <Card title="Formulario de Contacto" bordered={false}>
                        <Form form={formulario} layout="vertical" onFinish={manejarEnvio}>
                            <Form.Item
                                name="nombre"
                                label="Nombre Completo"
                                rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
                            >
                                <Input placeholder="Ej: Juan Pérez" />
                            </Form.Item>

                            <Form.Item
                                name="correo"
                                label="Correo Electrónico"
                                rules={[
                                    { required: true, message: 'Por favor ingresa tu correo' },
                                    { type: 'email', message: 'Ingresa un correo electrónico válido' },
                                ]}
                            >
                                <Input placeholder="ejemplo@correo.com" />
                            </Form.Item>

                            <Form.Item
                                name="mensaje"
                                label="Mensaje"
                                rules={[{ required: true, message: 'Por favor escribe un mensaje' }]}
                            >
                                <TextArea rows={4} placeholder="Escribe tu mensaje aquí..." />
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    icon={<SendOutlined />}
                                    loading={enviando}
                                    block
                                >
                                    Enviar Mensaje
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </section>
    );
};

export default SeccionContacto;