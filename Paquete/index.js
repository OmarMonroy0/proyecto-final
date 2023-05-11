//funciones para los boletos

//funciones para los paquetes
let pagoPaquete = false;
let pagoVuelo = false;
let pagoHotel = false;
let personasPaquete = 0;
let personasVuelo = 0;
let personasHotel = 0;

//lectura de datos del paquete
const LeerPaquete = () => {
  const paquete = document.getElementById('Paquete').value;
  console.log(paquete);
  return paquete;
};

const LeerFechaLlegada = () => {
  const llegada = document.getElementById('fechaLlegadaPaquete').value;
  console.log(llegada);
  return llegada;
};

const LeerFechaSalida = () => {
  const salida = document.getElementById('fechaSalidaPaquete').value;
  console.log(salida);
  return salida;
};

const LeerPersonas = () => {
  let personas = document.querySelector('#Personas');
  personasPaquete = personas.value;
  return personasPaquete;
};

//lectura de datos de pago
const LeerCorreo = () => {
  let correo = document.getElementById('correo').value;
  console.log(correo);
  return correo;
};

const LeerNumeroTarjeta = () => {
  let tarjeta = document.getElementById('tarjeta').value;
  console.log(tarjeta);
  return tarjeta;
};

const LeerCVV = () => {
  let cvv = document.getElementById('cvv').value;
  console.log(cvv);
  return cvv;
};

const LeerFecha = () => {
  let fecha = document.getElementById('fecha-pago').value;
  console.log(fecha);
  return fecha;
};

//lectura de datos de boletos
const LeerOrigen = () => {
  const origen = document.getElementById('origen').value;
  console.log(origen);
  return origen;
};

const LeerDestino = () => {
  const destino = document.getElementById('destino').value;
  console.log(destino);
  return destino;
};

const FechaSalidaVuelo = () => {
  const fecha = document.getElementById('fechaSalida').value;
  console.log(fecha);
  return fecha;
};

const FechaRegreso = () => {
  const fecha = document.getElementById('fechaRegreso').value;
  console.log(fecha);
  return fecha;
};

const PersonasVuelo = () => {
  const personas = document.getElementById('Personas').value;
  console.log(personas);
  return personas;
};

const TipoAsiento = () => {
  const asiento = document.getElementById('Asiento').value;
  console.log(asiento);
  return asiento;
};

const TipoVuelo1 = () => {
  const vuelo = document.getElementById('TViaje1').checked;
  console.log(vuelo);
  return vuelo;
};

const TipoVuelo2 = () => {
  const vuelo = document.getElementById('TViaje2').checked;
  console.log(vuelo);
  return vuelo;
};

//lectura datos Hotel
const LecturaHotel = () => {
  const hotel = document.getElementById('Hotel').value;
  console.log(hotel);
  return hotel;
};
const LlegadaHotel = () => {
  const salida = document.getElementById('fechallegada').value;
  console.log(salida);
  return salida;
};
const RegresoHotel = () => {
  const regreso = document.getElementById('fecharegreso').value;
  console.log(regreso);
  return regreso;
};

const CuartosHotel = () => {
  const cuartos = document.getElementById('Cuartos').value;
  console.log(cuartos);
  return cuartos;
};

const TipoPaquete = () => {
  const paquete = document.getElementById('tipo_paquete').value;
  console.log(paquete);
  return paquete;
};
const Habitacion1 = () => {
  const habitacion = document.getElementById('habitacion1').checked;
  console.log(habitacion);
  return habitacion;
};

const Habitacion2 = () => {
  const habitacion = document.getElementById('habitacion2').checked;
  console.log(habitacion);
  return habitacion;
};

const Habitacion3 = () => {
  const habitacion = document.getElementById('habitacion3').checked;
  console.log(habitacion);
  return habitacion;
};

const BotonPaquetes = () => {
  const formulario = document.getElementById('formulario');
  const paquete = LeerPaquete();
  const fechaLlegadaPaquete = LeerFechaLlegada();
  const fechaSalida = LeerFechaSalida();
  const personas = LeerPersonas();

  if (!paquete) {
    window.alert('No se puede continuar, no ingresaste el tipo de paquete');
    formulario.setAttribute('action', 'paquete.html');
    return;
  }

  if (!fechaSalida) {
    window.alert('No se puede continuar, no ingresaste la de fecha de salida');
    formulario.setAttribute('action', 'paquete.html');
    return;
  }
  if (!fechaLlegadaPaquete) {
    window.alert('Debes especificar el dia de llegada');
    formulario.setAttribute('action', 'paquete.html');
    return;
  }
  //console.log(personas,'ay');
  if (personas <= 0) {
    window.alert('no puedes ingresar un numero negativo para las personas');
    formulario.setAttribute('action', 'paquete.html');
    return;
  }

  const datos = {
    paquete:
      paquete === 'Paquete 1'
        ? 'Familiar trip'
        : paquete === 'Paquete 2'
        ? 'Solo para ti'
        : 'La pareja del momento',
    fecha_llegada: fechaLlegadaPaquete,
    fecha_salida: fechaSalida,
    personas,
  };

  fetch('http://localhost:3000/paquete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datos),
  })
    .then((resp) => {
      console.log(resp.json());
    })
    .catch((err) => {
      console.error('Error', err);
    });
};

const BotonBoletos = () => {
  const formulario = document.getElementById('formulario');
  let origen = LeerOrigen();
  let destino = LeerDestino();
  const fecha_salida = FechaSalidaVuelo();
  const regreso = FechaRegreso();
  const personas = PersonasVuelo();
  const tipoAsiento = TipoAsiento();
  const vuelo1 = TipoVuelo1();
  const vuelo2 = TipoVuelo2();

  if (!origen) {
    window.alert('El origen no puede estar vacio.');
    formulario.setAttribute('action', 'boletos.html');
    return;
  }
  if (!destino) {
    window.alert('El destino no puede ser un campo vacio');
    formulario.setAttribute('action', 'boletos.html');
    return;
  }
  if (!fecha_salida) {
    window.alert('La fecha de salida no puede estar vacía');
    formulario.setAttribute('action', 'boletos.html');
    return;
  }
  if (!personas) {
    window.alert('El campo de numero de personas no puede estar vacio.');
    formulario.setAttribute('action', 'boletos.html');
    return;
  }
  if (personas <= 0) {
    window.alert('Debe haber al menos una persona');
    formulario.setAttribute('action', 'boletos.html');
    return;
  }
  if (!tipoAsiento) {
    window.alert('El campo de tipo de asiento no puede estar vacio');
    formulario.setAttribute('action', 'boletos.html');
    return;
  }

  if (!vuelo1 && !vuelo2) {
    window.alert('Debes marcar  un tipo de vuelo');
    formulario.setAttribute('action', 'boletos.html');
    return;
  }
  if (vuelo1 && vuelo2) {
    window.alert('Solo puedes marcar un tipo de vuelo');
    formulario.setAttribute('action', 'boletos.html');
    return;
  }

  if (vuelo2 && !regreso) {
    window.alert('Debes especificar la fecha de regreso en este tipo de vuelo');
    formulario.setAttribute('action', 'boletos.html');
    return;
  }

  origen =
    origen === 'DestinoP 1'
      ? 'Cancun, Quintana Roo'
      : origen === 'DestinoP 2'
      ? 'Oaxaca, Oaxaca'
      : origen === 'DestinoP 3'
      ? 'Mazatlan,Sinaloa'
      : origen === 'DestinoP 4'
      ? 'Huasteca Potosina, San Luis Potosi'
      : origen === 'DestinoP 5'
      ? 'Bacalar, Quintana Roo'
      : 'Cd. Mexico';

  destino =
    destino === 'DestinoD 1'
      ? 'Cancun, Quintana Roo'
      : destino === 'DestinoD 2'
      ? 'Oaxaca, Oaxaca'
      : destino === 'DestinoD 3'
      ? 'Mazatlan,Sinaloa'
      : destino === 'DestinoD 4'
      ? 'Huasteca Potosina, San Luis Potosi'
      : destino === 'DestinoD 5'
      ? 'Bacalar, Quintana Roo'
      : 'Cd. Mexico';

  const datos = {
    origen,
    destino,
    fecha_salida,
    fecha_llegada: regreso,
    personas,
    tipo_asiento: tipoAsiento,
    vuelo: vuelo1 ? 'Sencillo' : 'Redondo',
  };

  fetch('http://localhost:3000/vuelo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datos),
  })
    .then((resp) => {
      console.log(resp.json());
    })
    .catch((err) => {
      console.error('Error', err);
    });
};

const BotonHotel = () => {
  const formulario = document.getElementById('formulario');
  const hotel = LecturaHotel();
  const llegada = LlegadaHotel();
  const regreso = RegresoHotel();
  const cuartos = CuartosHotel();
  const tipo_paquete = TipoPaquete();
  const sencilla = Habitacion1();
  const doble = Habitacion2();
  const individual = Habitacion3();

  if (!hotel) {
    window.alert('El campo de hotel no puede estar vacio.');
    formulario.setAttribute('action', 'hotel.html');
    return;
  }
  if (!llegada) {
    window.alert('El campo de llegada al hotel no puede estar vacio.');
    formulario.setAttribute('action', 'hotel.html');
    return;
  }

  if (!regreso) {
    window.alert('El campo de salida del hotel no puede estar vacio.');
    formulario.setAttribute('action', 'hotel.html');
    return;
  }

  if (!tipo_paquete) {
    window.alert('El campo de tipo de paquete no puede estar vacio.');
    formulario.setAttribute('action', 'hotel.html');
    return;
  }
  if (cuartos <= 0) {
    window.alert('El campo de cuartos debe contener un valor mayor a 0');
    formulario.setAttribute('action', 'hotel.html');
    return;
  }
  const habitaciones = sencilla + doble + individual;

  if (habitaciones > 1) {
    window.alert('Solo puedes seleccionar un tipo de habitacion');
    formulario.setAttribute('action', 'hotel.html');
    return;
  }
  if (habitaciones < 1) {
    window.alert('Debes seleccionar un tipo de habitacion');
    formulario.setAttribute('action', 'hotel.html');
    return;
  }
  const datos = {
    hotel,
    llegada,
    regreso,
    cuartos,
    tipo_paquete,
    tipo_habitacion: sencilla ? 'Sencilla' : doble ? 'Doble' : 'Individual',
  };

  fetch('http://localhost:3000/hotel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datos),
  })
    .then((resp) => {
      console.log(resp.json());
    })
    .catch((err) => {
      console.error('Error', err);
    });
};

//leer  los datos del pago
const BotonPago = () => {
  const formulario = document.getElementById('formulario');
  const correo = LeerCorreo();
  const tarjeta = LeerNumeroTarjeta();
  const cvv = LeerCVV();
  const fecha = LeerFecha();

  if (!correo) {
    window.alert('El correo no puede estar vacio');
    formulario.setAttribute('action', 'pago.html');
    return;
  }
  if (!tarjeta) {
    window.alert('El numero de tarjeta no puede estar vacio');
    formulario.setAttribute('action', 'pago.html');
    return;
  }
  if (!cvv) {
    window.alert('El CVV no puede estar vacio');
    formulario.setAttribute('action', 'pago.html');
    return;
  }
  if (!fecha) {
    window.alert('La fecha no puede estar vacia');
    formulario.setAttribute('action', 'pago.html');
    return;
  }

  window.alert('Pago realizado con exito');
  formulario.setAttribute('action', 'index.html');

  const datos = {
    correo,
    tarjeta,
    cvv,
    fecha,
  };

  fetch('http://localhost:3000/pago', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datos),
  })
    .then((resp) => {
      console.log(resp.json());
    })
    .catch((err) => {
      console.error('Error', err);
    });
};
