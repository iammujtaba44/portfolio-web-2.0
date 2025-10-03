import { useMemo } from "react";
import { ContactRepository } from "../data/repositories/ContactRepository";

const contactRepository = new ContactRepository();

export function useContact() {
  const contact = useMemo(() => contactRepository.getContactInfo(), []);

  return {
    contact,
  };
}
