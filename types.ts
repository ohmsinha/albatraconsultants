export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'shield' | 'utensils' | 'health' | 'leaf';
  link: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}
