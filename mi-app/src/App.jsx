import { useState, useEffect } from 'react';
import { Layout, Spin } from 'antd';
import BarraNavegacion from './components/layout/BarraNavegacion.jsx';
import DatosPersonales from './components/organisms/DatosPersonales.jsx';
import ExperienciaLaboral from './components/organisms/ExperienciaLaboral.jsx';
import ListaEstudios from './components/organisms/ListaEstudios.jsx';
import GaleriaProyectos from './components/organisms/GaleriaProyectos.jsx';
import SeccionContacto from './components/organisms/SeccionContacto.jsx';
import PieDePagina from './components/organisms/PieDePagina.jsx';

const { Content } = Layout;

const App = () => {
  const [perfil, setPerfil] = useState(null);
  const [experiencias, setExperiencias] = useState([]);
  const [estudios, setEstudios] = useState([]);
  const [proyectos, setProyectos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Datos Personales
    setPerfil({
      nombre: "Bruno Aguilera V.",
      titulo: "Estudiante de Analista Programador",
      ubicacion: "Santiago, Chile",
      descripcion:
          "Estudiante de Analista Programador que combina competencias técnicas en desarrollo de software con una trayectoria en atención al público, logística y soporte operativo. Demostrada capacidad para trabajar bajo presión, resolver problemas en entornos dinámicos y adaptarse rápidamente a nuevas tecnologías y metodologías de trabajo.",
      avatar: "https://img.magnific.com/vector-premium/icono-perfil-avatar-predeterminado-imagen-usuario-redes-sociales-icono-avatar-gris-silueta-perfil-blanco-ilustracion-vectorial_561158-3408.jpg?semt=ais_hybrid&w=740&q=80",
      habilidadesTecnicas: [
        "Java",
        "Python",
        "SQL (Bases de Datos)",
        "Spring Boot",
        "React",
        "Git y GitHub",
        "NetBeans",
        "VS Code",
      ],
      habilidadesBlandas: [
        "Resolución de problemas",
        "Trabajo en equipo",
        "Comunicación efectiva",
        "Adaptabilidad",
      ],
      idiomas: ["Español (Nativo)", "Inglés (C1+)"],
    });

    //Experiencia Laboral
    setExperiencias([
      {
        id: 1,
        empresa: "Teatro Nescafé de las Artes",
        cargo: "Validador de Tickets",
        fechas: "SEP 2022 - PRESENTE",
        descripcion:
            "Gestión de accesos y control de flujos en eventos masivos mediante validación digital. Atención directa al público, resolución rápida de problemas de entradas y manejo continuo de dispositivos móviles y software de ticketeras en tiempo real.",
      },
      {
        id: 2,
        empresa: "Vivaro Video",
        cargo: "Asistente de Cámara",
        fechas: "OCT 2023 - OCT 2024",
        descripcion:
            "Soporte técnico y operativo en el montaje, configuración y desmontaje de equipos de transmisión audiovisual. Coordinación en equipo bajo presión con dirección y camarógrafos durante transmisiones en vivo, y mantenimiento preventivo de equipos.",
      },
      {
        id: 3,
        empresa: "Club Hípico de Santiago",
        cargo: "Asistente Jefe de Bodega",
        fechas: "ENE 2023 - MAR 2023",
        descripcion:
            "Control de inventarios y logística en recepción, almacenamiento y despacho de insumos. Registro de datos en planillas y sistemas informáticos para seguimiento de materiales y coordinación de tareas diarias del personal de bodega.",
      },
    ]);

    // Estudios
    setEstudios([
      {
        id: 1,
        institucion: "Instituto Profesional Duoc UC",
        titulo: "Analista Programador",
        anio: "2025 - A la fecha",
      },
      {
        id: 2,
        institucion: "Certificaciones y Competencias",
        titulo: "Java, Python, SQL, Spring Boot, Git y GitHub",
        anio: "2025 - 2026",
      },
      {
        id: 3,
        institucion: "Formación de Idiomas",
        titulo: "Inglés Avanzado (C1+)",
        anio: "Certificado",
      },
    ]);

    // Desarrollos y Proyectos
    setProyectos([
      {
        id: 1,
        titulo: "Frutos Secos Velasquez",
        descripcion:
            "Sistema de Gestión de Microservicios",
        imagen: "https://ccnuts.cl/wp-content/uploads/2023/05/20230530_183523.jpg",
        urlGithub: "https://github.com/BrunoAAguileraV/Proyecto-Frutos-Secos-Velasquez-Aguilera-Vidal-010D.git",
      },
    ]);

    setCargando(false);
  }, []);

  if (cargando || !perfil) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Spin size="large" />
        </div>
    );
  }

  return (
      <Layout style={{ minHeight: '100vh', background: '#f5f5f5' }}>
        <BarraNavegacion />
        <Content style={{ padding: '0 24px', maxWidth: 1100, margin: '0 auto', width: '100%' }}>
          <DatosPersonales perfil={perfil} />
          <ExperienciaLaboral experiencias={experiencias} />
          <ListaEstudios estudios={estudios} />
          <GaleriaProyectos proyectos={proyectos} />
          <SeccionContacto />
        </Content>
        <PieDePagina />
      </Layout>
  );
};

export default App;