import { Timeline, Typography, Card } from 'antd';
import TituloSeccion from '../atoms/TituloSeccion.jsx';

const { Title, Text, Paragraph } = Typography;

const ExperienciaLaboral = ({ experiencias = [] }) => {
    const elementosLineaTiempo = experiencias.map((exp) => ({
        color: '#1677ff',
        content: (
            <Card size="small" style={{ marginBottom: 16 }}>
                <Title level={4} style={{ margin: 0 }}>
                    {exp.cargo}
                </Title>
                <Text strong style={{ color: '#1677ff' }}>
                    {exp.empresa}
                </Text>
                <br />
                <Text type="secondary" style={{ fontSize: '12px' }}>
                    {exp.fechas}
                </Text>
                <Paragraph style={{ marginTop: 8 }}>
                    {exp.descripcion}
                </Paragraph>
            </Card>
        ),
    }));

    return (
        <section id="experiencia" style={{ padding: '40px 0' }}>
            <TituloSeccion titulo="Experiencia Laboral" subtitulo="Trayectoria cronológica" />
            <div style={{ maxWidth: 750, margin: '0 auto' }}>
                <Timeline items={elementosLineaTiempo} />
            </div>
        </section>
    );
};

export default ExperienciaLaboral;