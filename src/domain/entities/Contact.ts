export interface ContactInfo {
  email: string;
  location: string;
  phone?: string;
  website?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Contact {
  info: ContactInfo;
  socialLinks: SocialLink[];
}

export interface ContactRepository {
  getContactInfo(): Contact;
}
