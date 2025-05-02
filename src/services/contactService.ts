
import { CompanyContact } from '../types';

// Simulamos un backend usando localStorage
const STORAGE_KEY = 'gerenciar_contacts';

export const getContacts = (): CompanyContact[] => {
  const contacts = localStorage.getItem(STORAGE_KEY);
  return contacts ? JSON.parse(contacts) : [];
};

export const saveContact = (companyId: string, contactName: string): void => {
  const contacts = getContacts();
  
  // Verificar si ya existe un contacto para esta empresa
  const existingContact = contacts.find(contact => contact.companyId === companyId);
  
  if (existingContact) {
    // Actualizar el contacto existente
    existingContact.contactedBy = contactName;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  } else {
    // Crear un nuevo contacto
    const newContacts = [...contacts, { companyId, contactedBy: contactName }];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContacts));
  }
};

export const isCompanyContacted = (companyId: string): string | null => {
  const contacts = getContacts();
  const contact = contacts.find(contact => contact.companyId === companyId);
  return contact ? contact.contactedBy : null;
};
