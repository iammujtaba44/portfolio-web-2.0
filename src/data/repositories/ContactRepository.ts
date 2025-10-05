import {
  Contact,
  ContactRepository as IContactRepository,
} from "../../domain/entities/Contact";

export class ContactRepository implements IContactRepository {
  private contact: Contact = {
    info: {
      email: "immujtaba96@gmail.com",
      location: "Pakistan",
      phone: "+92-XXX-XXXXXXX",
    },
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/iammujtaba44",
        icon: "Github",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammad-mujtaba-92146a167",
        icon: "Linkedin",
      },
      {
        platform: "Facebook",
        url: "https://www.facebook.com/share/12Do2Ag5dRa/?mibextid=wwXIfr",
        icon: "Facebook",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/imujtaba_zain/profilecard/?igsh=MTBicXdobWl6dm8wbg==",
        icon: "Instagram",
      },
      {
        platform: "Topmate",
        url: "https://topmate.io/immujtaba",
        icon: "MessageCircle",
      },
    ],
  };

  getContactInfo(): Contact {
    return this.contact;
  }
}
