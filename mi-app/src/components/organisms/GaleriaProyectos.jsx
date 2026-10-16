import { Row, Col } from 'antd';
import TituloSeccion from '../atoms/TituloSeccion.jsx';
import TarjetaProyecto from '../molecules/TarjetaProyecto.jsx';

const GaleriaProyectos = ({ proyectos = [] }) => {
    return (
        <section id="proyectos" style={{ padding: '40px 0' }}>
            <TituloSeccion titulo="Desarrollos y Proyectos" subtitulo="Galería de proyectos destacados" />
            <Row gutter={[24, 24]}>
                {proyectos.map((proyecto) => (
                    <Col xs={24} sm={12} md={8} key={proyecto.id}>
                        <TarjetaProyecto
                            titulo={proyecto.titulo}
                            descripcion={proyecto.descripcion}
                            imagen={proyecto.imagen}
                            urlGithub={proyecto.urlGithub}
                        />
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default GaleriaProyectos;