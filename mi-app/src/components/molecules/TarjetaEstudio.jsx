import { Card, Typography, Tag } from 'antd';
import { BankOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const TarjetaEstudio = ({ institucion, titulo, anio }) => {
    return (
        <Card hoverable style={{ height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <BankOutlined style={{ fontSize: 20, color: '#1677ff' }} />
                <Title level={4} style={{ margin: 0 }}>
                    {titulo}
                </Title>
            </div>
            <Text strong style={{ display: 'block', marginBottom: 12 }}>
                {institucion}
            </Text>
            <Tag color="blue">{anio}</Tag>
        </Card>
    );
};

export default TarjetaEstudio;