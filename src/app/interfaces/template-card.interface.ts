export interface TemplateCard {
  image: string;
  title: string;
  logo: string;
  category: string;
  type: '' | 'new' | 'featured';
  paid: boolean;
}
