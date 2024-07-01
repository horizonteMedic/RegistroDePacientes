import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Formulario = () => {
  const [datos, setDatos] = useState({
    dni:'',
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    sexo: '',
    email: '',
    lugarNacimiento: '',
    nivelEstudio: '',
    profesion: '',
    estadoCivil: '',
    direccion: '',
    departamento: '',
    provincia: '',
    distrito: '',
    caserio: '',
    telefono: '',
    celular: ''
  });

  const [tiempoRestante, setTiempoRestante] = useState(300); 
  const [alertaMostrada, setAlertaMostrada] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTiempoRestante(prev => {
        if (prev === 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!alertaMostrada) {
        e.preventDefault();
        e.returnValue = ''; // Para mostrar el cuadro de diálogo de confirmación personalizado
        return 'Ya no puede acceder al sistema. Póngase en contacto con un asesor.';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [alertaMostrada]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value)
    setDatos({
      ...datos,
      [name]: value
    });
  };

  const handleDateChange = (date) => {
    setDatos({
      ...datos,
      fechaNacimiento: date
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos a través de una solicitud HTTP o hacer cualquier otra acción necesaria
    console.log(datos);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ backgroundImage: `url('https://www.mediasource.mx/hubfs/blog-files/fondos-web.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} />
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'relative', zIndex: 1 }} className="min-h-screen flex justify-center items-center">
        <div className="bg-[#144579] p-8 rounded shadow-md w-full sm:w-3/4 lg:w-1/2">
          <h2 className="text-1xl font-bold mb-4 text-white">Formulario de Registro</h2>
          <div className="flex justify-end text-white mb-2">
            Tiempo restante: {Math.floor(tiempoRestante / 60)}:{(tiempoRestante % 60).toString().padStart(2, '0')}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {Object.entries(datos).map(([key, value]) => (
                <div key={key}>
                  <label htmlFor={key} className="text-sm font-semibold text-white" style={{ fontSize: '13px' }}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                  {key === 'fechaNacimiento' ? (
                    <DatePicker
                      id={key}
                      name={key}
                      selected={value}
                      onChange={handleDateChange}
                      className="form-input border rounded w-full"
                      dateFormat="dd/MM/yyyy"
                      showYearDropdown
                      scrollableYearDropdown
                      yearDropdownItemNumber={15} // Número de años a mostrar en el menú desplegable
                    />
                  ) : key === 'sexo' || key === 'nivelEstudio' || key === 'estadoCivil' ? (
                    <select id={key} name={key} value={value} onChange={handleChange} className="text-black form-select text-sm cursor-pointer p-1 border rounded w-full">
                      <option value="">Seleccionar</option>
                      {key === 'sexo' && <><option value="M">MACULINO</option>
                                        <option value="F">FEMENINO</option></>}
                    </select>
                  ) : (
                    <input type="text" id={key} name={key} value={value} onChange={handleChange} className="text-black form-input border rounded w-full" />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 mt-4 rounded" style={{fontSize:'13px', borderRadius:'2em'}}>Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
