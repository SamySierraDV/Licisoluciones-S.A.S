export interface Lawyer {
  id: string;
  name: string;
  role: string;
  specialization: string;
  bio: string;
  image: string;
  email: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  longDescription: string;
  benefits: string[];
}

export interface BicPillar {
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  feedback: string;
  rating: number;
}
