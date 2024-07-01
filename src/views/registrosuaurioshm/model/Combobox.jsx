import { URLAzure } from '../../config/config';

const ComboboxNivelE = () => {
    const [options, setOptions] = useState([]);
    const token = useAuthStore((state) => state.token);
    useEffect(() => { 
          fetch(`${URLAzure}/api/v01/ct/detalleParametros/detalleParametrizable/Nivel de Estudios`,{
          method: 'GET', 
          headers: {
              'Authorization': `Bearer ${token}`
          },
      })
          .then(response => response.json())
          .then((data) => {
              setOptions(data);
          })
          .catch((error) => {
              console.error('Error obteniendo opciones de tipo de documento:', error);
          });
      }, []);
  
    return options;
  };

  const ComboboxProfesión = () => {
    const [options, setOptions] = useState([]);
    const token = useAuthStore((state) => state.token);
    useEffect(() => { 
          fetch(`${URLAzure}/api/v01/ct/detalleParametros/detalleParametrizable/Profesion o Ocupacion`,{
          method: 'GET', 
          headers: {
              'Authorization': `Bearer ${token}`
          },
      })
          .then(response => response.json())
          .then((data) => {
              setOptions(data);
          })
          .catch((error) => {
              console.error('Error obteniendo opciones de tipo de documento:', error);
          });
      }, []);
  
    return options;
  };