import { Typography, Divider } from 'antd';

const { Title, Text } = Typography;

const TituloSeccion = ({ titulo, subtitulo }) => {
    return (
        <div style={{ textAlign: 'center', margin: '40px 0 24px' }}>
            <Title level={2} style={{ marginBottom: 4 }}>
                {titulo}
            </Title>
            {subtitulo && (
                <Text type="secondary" style={{ fontSize: '16px' }}>
                    {subtitulo}
                </Text>
            )}
            <Divider style={{ width: 60, minWidth: 60, margin: '16px auto', borderColor: '#1677ff' }} />
        </div>
    );
};

export default TituloSeccion;