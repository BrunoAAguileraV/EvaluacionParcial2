import { Layout, Menu } from 'antd';

const { Header } = Layout;

const BarraNavegacion = () => {
    const elementosMenu = [
        { key: '1', label: <a href="#Datos Personales">Quién Soy</a> },
        { key: '2', label: <a href="#experiencia">Experiencia</a> },
        { key: '3', label: <a href="#estudios">Estudios</a> },
        { key: '4', label: <a href="#proyectos">Proyectos</a> },
        { key: '5', label: <a href="#contacto">Contacto</a> },
    ];

    return (
        <Header style={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%', display: 'flex', alignItems: 'center' }}>
            <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px', marginRight: 32 }}>
                Bruno Aguilera V.
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={elementosMenu}
                style={{ flex: 1, minWidth: 0 }}
            />
        </Header>
    );
};

export default BarraNavegacion;