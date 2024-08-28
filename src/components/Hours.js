// Placeholder to host a component
import React from 'react';

// Objeto que define las horas de apertura para cada día de la semana
const openingHours = {
  0: '9 a.m. - 8 p.m.', // Domingo
  1: '10 a.m. - 4 p.m.', // Lunes
  2: '10 a.m. - 4 p.m.', // Martes
  3: '10 a.m. - 4 p.m.', // Miércoles
  4: '10 a.m. - 4 p.m.', // Jueves
  5: '10 a.m. - 4 p.m.', // Viernes
  6: '9 a.m. - 8 p.m.', // Sábado
};

const Hours = () => {
  // Obtener el día de la semana actual (0 = domingo, 1 = lunes, ..., 6 = sábado)
  const currentDay = new Date().getDay();

  // Obtener las horas de apertura del día actual
  const todayHours = openingHours[currentDay];

  return (
    <div>
      <h2>Horas de apertura hoy</h2>
      <p>{todayHours}</p>
    </div>
  );
};

export default Hours;
