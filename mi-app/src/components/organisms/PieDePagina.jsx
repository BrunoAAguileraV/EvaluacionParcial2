import { Layout, Typography } from 'antd';

const { Footer } = Layout;
const { Text } = Typography;

//pie de pagina con informacion
const PieDePagina = () => {
    // obtiene el año actual y lo muestra
    const anioActual = new Date().getFullYear();

    return (
        <Footer style={{ textAlign: 'center', background: '#001529', color: '#fff', padding: '24px 16px' }}>
            {/* mensaje de derechos de autor*/}
            <Text style={{ color: 'rgba(255, 255, 255, 0.85)', display: 'block', marginBottom: 4 }}>
                © {anioActual} Bruno Aguilera V. Todos los derechos reservados.
            </Text>

            {/* datos de contacto directo */}
            <Text style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '13px', display: 'block' }}>
                Santiago, Chile · Tel: +56 9 48693930 · Correo: bruno.aguilera.velasquez@gmail.com
            </Text>
        </Footer>
    );
};

export default PieDePagina;