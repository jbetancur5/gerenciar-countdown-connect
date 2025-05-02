
import { useState, useEffect } from 'react';
import { Company } from '../types';
import { isCompanyContacted, saveContact } from '../services/contactService';
import { toast } from '@/hooks/use-toast';
import { Mail, Phone, Instagram } from 'lucide-react';

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  const [contactName, setContactName] = useState('');
  const [contacted, setContacted] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Verificar si la empresa ya ha sido contactada
    const contactedBy = isCompanyContacted(company.id);
    if (contactedBy) {
      setContacted(contactedBy);
    }
  }, [company.id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactName.trim()) {
      toast({
        title: "Error",
        description: "Por favor ingresa un nombre",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Guardar el contacto
    saveContact(company.id, contactName);
    
    // Actualizar el estado
    setContacted(contactName);
    setContactName('');
    
    toast({
      title: "¡Éxito!",
      description: `Has contactado con ${company.name}`,
    });
    
    setIsSubmitting(false);
  };

  const getSectorLabel = (sector: Company['sector']) => {
    switch (sector) {
      case 'emergente':
        return 'Sectores Emergentes';
      case 'triple-impacto':
        return 'Triple Impacto';
      case 'ia-digitalizacion':
        return 'IA & Digitalización';
      default:
        return 'Otro Sector';
    }
  };

  const getSectorColor = (sector: Company['sector']) => {
    switch (sector) {
      case 'emergente':
        return 'bg-gerenciar-blue text-white';
      case 'triple-impacto':
        return 'bg-gerenciar-purple text-white';
      case 'ia-digitalizacion':
        return 'bg-gerenciar-pink text-white';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="company-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl animate-fade-in">
      <div className="md:flex">
        <div className="md:w-2/3 p-6">
          <h3 className="text-2xl font-bold text-gerenciar-darkblue mb-2">{company.name}</h3>
          <span className={`inline-block px-3 py-1 rounded-full text-xs ${getSectorColor(company.sector)} mb-3`}>
            {getSectorLabel(company.sector)}
          </span>
          <p className="text-gray-600 mb-4">{company.description}</p>
          
          {/* Contactos */}
          <div className="flex space-x-4 mb-4">
            {company.contacts?.email && (
              <a 
                href={`mailto:${company.contacts.email}`}
                className="text-gerenciar-blue hover:text-gerenciar-purple transition-colors"
                title={company.contacts.email}
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
            {company.contacts?.whatsapp && (
              <a 
                href={`https://wa.me/${company.contacts.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gerenciar-blue hover:text-gerenciar-purple transition-colors"
                title={company.contacts.whatsapp}
              >
                <Phone className="w-5 h-5" />
              </a>
            )}
            {company.contacts?.instagram && (
              <a 
                href={`https://instagram.com/${company.contacts.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gerenciar-blue hover:text-gerenciar-purple transition-colors"
                title={`@${company.contacts.instagram}`}
              >
                <Instagram className="w-5 h-5" />
              </a>
            )}
          </div>
          
          {/* Contacto Form */}
          {contacted ? (
            <div className="bg-green-50 border border-green-200 p-3 rounded-md">
              <p className="text-green-700 font-medium">
                Contactado por: <span className="font-semibold">{contacted}</span>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Nombre de GPGeño"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gerenciar-purple"
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gerenciar-purple hover:bg-gerenciar-darkblue text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                >
                  {isSubmitting ? 'Contactando...' : 'Contactar'}
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="md:w-1/3">
          <img 
            src={company.imageUrl} 
            alt={company.name} 
            className="h-full w-full object-cover"
            style={{ minHeight: '200px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
