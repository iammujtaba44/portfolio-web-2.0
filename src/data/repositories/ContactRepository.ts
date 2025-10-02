import {
  Contact,
  ContactRepository as IContactRepository,
} from "../../domain/entities/Contact";

export class ContactRepository implements IContactRepository {
  private contact: Contact = {
    info: {
      email: "muhammad.mujtaba@email.com",
      location: "Pakistan",
      phone: "+92-XXX-XXXXXXX",
    },
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/mujtaba",
        icon: "Github",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/mujtaba",
        icon: "Linkedin",
      },
      {
        platform: "YouTube",
        url: "https://youtube.com/@mujtaba",
        icon: "Youtube",
      },
    ],
  };

  getContactInfo(): Contact {
    return this.contact;
  }
}
