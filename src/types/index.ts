export type DoctorProfile = {
  fullName: string;
  specialty: string;
  degrees: string[];
  designation: string;
  organization: string;
  yearsOfExperience: number;
  bmdcRegistration?: string;
  professionalMemberships: string[];
  shortBio: string;
  profileImage: string;
  phone: string;
  whatsapp: string;
  email?: string;
};

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type ChamberSchedule = {
  days: Weekday[];
  startTime: string;
  endTime: string;
};

export type Chamber = {
  id: string;
  name: string;
  address: string;
  visitingDays: string;
  visitingHours: string;
  appointmentNumber: string;
  mapUrl?: string;
  schedule: ChamberSchedule;
};

export type Expertise = {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
};

export type Testimonial = {
  id: string;
  patientName: string;
  quote: string;
  location?: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  description: string;
  domain: string;
  phone: string;
  whatsapp: string;
  email?: string;
  socialLinks: {
    facebook?: string;
    linkedin?: string;
  };
};

export type ExperienceItem = {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
};