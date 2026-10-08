export interface NavItem {
  label: string;
  to: string;
  end?: boolean;
}

export const navLinks: NavItem[] = [
  { label: 'Home', to: '/', end: true },
  { label: 'Shop', to: '/shop' },
  { label: 'Categories', to: '/#categories' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];
