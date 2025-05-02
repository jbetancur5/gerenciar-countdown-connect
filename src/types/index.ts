
export interface Company {
  id: string;
  name: string;
  description: string;
  sector: 'emergente' | 'triple-impacto' | 'ia-digitalizacion';
  imageUrl: string;
  contacts?: {
    email?: string;
    whatsapp?: string;
    instagram?: string;
  };
  contactedBy?: string;
}

export interface CompanyContact {
  companyId: string;
  contactedBy: string;
}
