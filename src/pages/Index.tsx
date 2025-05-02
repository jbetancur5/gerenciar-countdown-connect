
import { useState, useEffect } from 'react';
import CountdownTimer from '@/components/CountdownTimer';
import CompanyCard from '@/components/CompanyCard';
import SectorFilter from '@/components/SectorFilter';
import companies from '@/data/companies';
import { Company } from '@/types';

const Index = () => {
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>(companies);
  
  const handleFilterChange = (sector: string | null) => {
    if (!sector) {
      setFilteredCompanies(companies);
    } else {
      setFilteredCompanies(
        companies.filter(company => company.sector === sector)
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/a210a798-6fbb-4c2b-8846-c22f009b01ca.png')" }}>
          <div className="hero-overlay absolute inset-0"></div>
        </div>
        
        {/* Countdown */}
        <div className="relative pt-6 md:pt-10">
          <CountdownTimer />
        </div>
        
        <div className="relative flex-1 flex flex-col items-center justify-center text-white px-4 py-12 text-center">
          <img src="/gerenciar-logo.png" alt="EXPO GERENCIAR" className="w-3/4 max-w-xl mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">22 - 23 de Mayo</h1>
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg max-w-3xl">
            <p className="text-xl md:text-2xl">
              ¡Es momento de actuar! Contactemos, vendamos y llevemos este evento al 
              <span className="font-bold"> SOLD OUT</span> que todos queremos alcanzar.
            </p>
          </div>
        </div>
      </div>
      
      {/* Empresas Section */}
      <section className="py-16 px-4 bg-gray-50" id="empresas">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gerenciar-darkblue">Empresas Participantes</h2>
          
          <SectorFilter onFilterChange={handleFilterChange} />
          
          <div className="space-y-8 mt-8">
            {filteredCompanies.map(company => (
              <CompanyCard key={company.id} company={company} />
            ))}
            
            {filteredCompanies.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-xl">No hay empresas para mostrar en este sector</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gerenciar-darkblue text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-4">EXPO GERENCIAR 2025</h3>
          <p>Transformando e impactando el futuro de los negocios</p>
          <p className="mt-4 text-sm text-gray-300">
            © {new Date().getFullYear()} GERENCIAR. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
