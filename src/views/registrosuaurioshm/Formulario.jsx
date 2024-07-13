import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Formulario = () => {
  const [datos, setDatos] = useState({
    dni: '',
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
  const [step, setStep] = useState(1);

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
    console.log(datos);
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    } else {
      alert('Por favor, complete todos los campos obligatorios.');
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        return datos.dni && datos.nombres && datos.apellidos && datos.fechaNacimiento && datos.email;
      case 2:
        return datos.lugarNacimiento && datos.nivelEstudio && datos.profesion && datos.estadoCivil && datos.direccion;
      default:
        return true;
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ backgroundImage: `url('https://www.mediasource.mx/hubfs/blog-files/fondos-web.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} />
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'relative', zIndex: 1 }} className="min-h-screen flex justify-center items-center">
        <div className="bg-[#144579] p-8 rounded shadow-md w-full sm:w-3/4 lg:w-1/2">
          <h2 className="text-1xl font-bold mb-4 text-white text-center">Formulario de Registro</h2>
          <div className="flex justify-between items-center mb-4">
            <div className={`flex-1 text-center ${step >= 1 ? 'text-orange-500' : 'text-white'}`}>
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full border-2 ${step >= 1 ? 'border-orange-500' : 'border-white'} flex items-center justify-center`}>
                  1
                </div>
                {step > 1 && <div className="h-2 bg-orange-500 w-full mt-2" />}
              </div>
            </div>
            <div className={`flex-1 text-center ${step >= 2 ? 'text-orange-500' : 'text-white'}`}>
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full border-2 ${step >= 2 ? 'border-orange-500' : 'border-white'} flex items-center justify-center`}>
                  2
                </div>
                {step > 2 && <div className="h-2 bg-orange-500 w-full mt-2" />}
              </div>
            </div>
            <div className={`flex-1 text-center ${step >= 3 ? 'text-orange-500' : 'text-white'}`}>
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full border-2 ${step >= 3 ? 'border-orange-500' : 'border-white'} flex items-center justify-center`}>
                  3
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="dni" className="text-sm font-semibold text-white">DNI:</label>
                  <input type="text" id="dni" name="dni" value={datos.dni} onChange={handleChange} className="text-black form-input border rounded w-full" />
                </div>
                <div>
                  <label htmlFor="nombres" className="text-sm font-semibold text-white">Nombres:</label>
                  <input type="text" id="nombres" name="nombres" value={datos.nombres} onChange={handleChange} className="text-black form-input border rounded w-full" />
                </div>
                <div>
                  <label htmlFor="apellidos" className="text-sm font-semibold text-white">Apellidos:</label>
                  <input type="text" id="apellidos" name="apellidos" value={datos.apellidos} onChange={handleChange} className="text-black form-input border rounded w-full" />
                </div>
                <div>
                  <label htmlFor="fechaNacimiento" className="text-sm font-semibold text-white">Fecha de Nacimiento:</label>
                  <DatePicker
                    id="fechaNacimiento"
                    name="fechaNacimiento"
                    selected={datos.fechaNacimiento}
                    onChange={handleDateChange}
                    className="form-input border rounded w-full"
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={15}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-semibold text-white">Email:</label>
                  <input type="text" id="email" name="email" value={datos.email} onChange={handleChange} className="text-black form-input border rounded w-full" />
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="lugarNacimiento" className="text-sm font-semibold text-white">Lugar de Nacimiento:</label>
                  <input type="text" id="lugarNacimiento" name="lugarNacimiento" value={datos.lugarNacimiento} onChange={handleChange} className="text-black form-input border rounded w-full" />
                </div>
                <div>
                  <label htmlFor="nivelEstudio" className="text-sm font-semibold text-white">Nivel de Estudio:</label>
                  <select id="nivelEstudio" name="nivelEstudio" value={datos.nivelEstudio} onChange={handleChange} className="text-black form-select text-sm cursor-pointer p-1 border rounded w-full">
                    <option value="">Seleccionar</option>
                  
                  </select>
                </div>
                <div>
                  <label htmlFor="profesion" className="text-sm font-semibold text-white">Profesión:</label>
                  <input type="text" id="profesion" name="profesion" value={datos.profesion} onChange={handleChange} className="text-black form-input border rounded w-full" />
                </div>
                <div>
                  <label htmlFor="estadoCivil" className="text-sm font-semibold text-white">Estado Civil:</label>
                  <select id="estadoCivil" name="estadoCivil" value={datos.estadoCivil} onChange={handleChange} className="text-black form-select text-sm cursor-pointer p-1 border rounded w-full">
                    <option value="">Seleccionar</option>
                 
                  </select>
                </div>
                <div>
                  <label htmlFor="direccion" className="text-sm font-semibold text-white">Dirección:</label>
                  <input type="text" id="direccion" name="direccion" value={datos.direccion} onChange={handleChange} className="text-black form-input border rounded w-full" />
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="departamento" className="text-sm font-semibold text-white">Departamento:</label>
                  <input type="text" id="departamento" name="departamento" value={datos.departamento} onChange={handleChange} className="text-black form-input border rounded w-full" />
                </div>
                <div>
                  <label htmlFor="provincia" className="text-sm font-semibold text-white">Provincia:</label>
                  <input type="text" id="provincia" name="provincia" value={datos.provincia} onChange={handleChange} className="text-black form-input border rounded w-full" />
                </div>
                <div>
                  <label htmlFor="distrito" className="text-sm font-semibold text-white">Distrito:</label>
                  <input type="text" id="distrito" name="distrito" value={datos.distrito} onChange={handleChange} className="text-black form-input border rounded w-full" />
                </div>
                <div>
                  <label htmlFor="caserio" className="text-sm font-semibold text-white">Caserío:</label>
                  <input type="text" id="caserio" name="caserio" value={datos.caserio} onChange={handleChange} className="text-black form-input border rounded w-full" />
                </div>
                <div>
                  <label htmlFor="telefono" className="text-sm font-semibold text-white">Teléfono:</label>
                  <input type="text" id="telefono" name="telefono" value={datos.telefono} onChange={handleChange} className="text-black form-input border rounded w-full" />
                </div>
                <div>
                  <label htmlFor="celular" className="text-sm font-semibold text-white">Celular:</label>
                  <input type="text" id="celular" name="celular" value={datos.celular} onChange={handleChange} className="text-black form-input border rounded w-full" />
                </div>
              </div>
            )}
            <div className="text-center">
              {step > 1 && (
                <button type="button" onClick={prevStep} className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-1 px-4 mt-4 rounded mr-2">Anterior</button>
              )}
              {step < 3 ? (
                <button type="button" onClick={nextStep} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 mt-4 rounded">Siguiente</button>
              ) : (
                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-semibold py-1 px-4 mt-4 rounded">Enviar</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
