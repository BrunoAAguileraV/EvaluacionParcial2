import { Row, Col } from 'antd';
import TituloSeccion from '../atoms/TituloSeccion.jsx';
import TarjetaEstudio from '../molecules/TarjetaEstudio.jsx';

// muestra estudios
const ListaEstudios = ({ estudios = [] }) => {
    return (
        // id="estudios" permite la navegación ancla desde la barra de menu superior
        <section id="estudios" style={{ padding: '40px 0' }}>
            <TituloSeccion titulo="Estudios" subtitulo="Formación académica y certificaciones" />
            <Row gutter={[24, 24]} justify="center">
                {estudios.map((estudio) => (
                    <Col xs={24} sm={12} md={8} key={estudio.id}>
                        <TarjetaEstudio
                            institucion={estudio.institucion}
                            titulo={estudio.titulo}
                            anio={estudio.anio}
                        />
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default ListaEstudios;