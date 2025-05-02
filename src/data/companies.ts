
import { Company } from '../types';

const companies: Company[] = [
  {
    id: '1',
    name: 'TechInnovate',
    description: 'Empresa líder en soluciones de IA para el sector financiero. Optimiza procesos y reduce costos operativos mediante algoritmos avanzados de machine learning.',
    sector: 'ia-digitalizacion',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    contacts: {
      email: 'contacto@techinnovate.com',
      instagram: 'techinnovate',
      whatsapp: '+573101234567'
    }
  },
  {
    id: '2',
    name: 'EcoSolutions',
    description: 'Startup enfocada en desarrollar productos sostenibles que reducen la huella de carbono en hogares y empresas.',
    sector: 'triple-impacto',
    imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    contacts: {
      email: 'info@ecosolutions.co',
      instagram: 'ecosolutions_co'
    }
  },
  {
    id: '3',
    name: 'HealthTech',
    description: 'Plataforma que conecta pacientes con profesionales de la salud mental a través de telemedicina avanzada.',
    sector: 'emergente',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    contacts: {
      whatsapp: '+573209876543',
      email: 'contacto@healthtech.co'
    }
  },
  {
    id: '4',
    name: 'DataDrive',
    description: 'Especialistas en análisis de grandes volúmenes de datos para optimización de cadenas logísticas.',
    sector: 'ia-digitalizacion',
    imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    contacts: {
      email: 'info@datadrive.com'
    }
  }
];

export default companies;
