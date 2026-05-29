// src/data/ecosystems.ts
// Datos de los ecosistemas paramunos del proyecto

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface ClimateData {
  meanAnnualTemp: string;
  tempRange: string;
  annualPrecipitation: string;
  humidity: string;
  uvIndex: string;
}

export interface Ecosystem {
  id: string;
  name: string;
  fullName: string;
  department: string;
  elevationRange: string;
  coordinates: Coordinates;
  description: string;
  keySpecies: string[];
  keyFeatures: string[];
  geologicalPeriod: string;
  climateData: ClimateData;
}

export const ecosystems: Ecosystem[] = [
  {
    id: 'frontino',
    name: 'Frontino',
    fullName: 'Páramo de Frontino (Páramo del Sol)',
    department: 'Antioquia',
    elevationRange: '3.200–4.080 m s.n.m.',
    coordinates: {
      lat: 6.4833,
      lng: -76.1000,
    },
    description:
      'El Páramo de Frontino, también conocido como Páramo del Sol, es un enclave paramuno aislado en la Cordillera Occidental de los Andes colombianos. Su aislamiento geográfico lo convierte en un laboratorio natural para el estudio de la biogeografía insular de alta montaña. Las lagunas de origen glaciar, como la Laguna de Puente Largo, albergan registros sedimentarios que documentan los cambios ambientales de los últimos 50.000 años.',
    keySpecies: [
      'Espeletia frontinoensis (frailejón endémico)',
      'Coleoptera: Staphylinidae (estafilínidos de páramo)',
      'Coleoptera: Carabidae (carábidos de alta montaña)',
      'Diptera: Chironomidae (quironómidos lagunares)',
      'Diptera: Tipulidae (típulas de páramo)',
      'Acari: Oribatida (ácaros oribátidos edáficos)',
    ],
    keyFeatures: [
      'Enclave paramuno aislado en la Cordillera Occidental',
      'Lagunas de origen glaciar con registros sedimentarios profundos',
      'Flora de frailejones endémicos (Espeletia frontinoensis)',
      'Transición bosque alto-andino / páramo bien preservada',
      'Evidencia de fluctuaciones glaciares del Pleistoceno tardío',
    ],
    geologicalPeriod: 'Pleistoceno tardío – Holoceno (últimos ~50.000 años)',
    climateData: {
      meanAnnualTemp: '4–8 °C',
      tempRange: '-2 °C (noche) a 18 °C (día, exposición directa)',
      annualPrecipitation: '2.000–3.000 mm',
      humidity: '85–95% (humedad relativa media)',
      uvIndex: 'Muy alto (11–16, escala OMS)',
    },
  },
  {
    id: 'cocuy',
    name: 'Cocuy',
    fullName: 'Sierra Nevada del Cocuy, Güicán y Chita',
    department: 'Boyacá',
    elevationRange: '3.400–5.330 m s.n.m.',
    coordinates: {
      lat: 6.4167,
      lng: -72.3167,
    },
    description:
      'La Sierra Nevada del Cocuy es la masa glaciar más extensa de los Andes colombianos y el punto más alto de la Cordillera Oriental. Sus páramos, situados entre el límite superior del bosque alto-andino y el frente glaciar, contienen una diversidad de microhábitats que varía con la altitud, la exposición y la proximidad al hielo. Las lagunas de origen glaciar ofrecen registros paleoambientales de alta resolución temporal.',
    keySpecies: [
      'Espeletia spp. (complejo de frailejones de la Cordillera Oriental)',
      'Coleoptera: Curculionidae (gorgojos asociados a Espeletia)',
      'Coleoptera: Chrysomelidae (crisomélidos de páramo)',
      'Diptera: Simuliidae (simúlidos de arroyos glaciares)',
      'Hemiptera: Reduviidae (redúvidos de alta montaña)',
      'Collembola (colémbolos criófilos)',
    ],
    keyFeatures: [
      'Mayor masa glaciar de Colombia (en retroceso acelerado)',
      'Gradiente altitudinal completo: bosque – páramo – superpáramo – nival',
      'Lagunas de origen glaciar reciente con sedimentos laminados',
      'Diversidad de microhábitats: turberas, roquedales, arenales periglaciares',
      'Evidencia directa de cambio climático contemporáneo',
    ],
    geologicalPeriod: 'Pleistoceno tardío – Holoceno (últimos ~30.000 años)',
    climateData: {
      meanAnnualTemp: '2–6 °C (zona de páramo)',
      tempRange: '-5 °C (noche, superpáramo) a 15 °C (día, páramo bajo)',
      annualPrecipitation: '1.000–2.500 mm',
      humidity: '70–90% (variable según vertiente)',
      uvIndex: 'Extremo (12–18, escala OMS)',
    },
  },
];

export default ecosystems;
