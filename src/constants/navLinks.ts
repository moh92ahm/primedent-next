export interface NavItem {
  link: {
    url: string
    label: string
    type: 'custom'
  }
}

export const NAV_LINKS: NavItem[] = [
  { link: { url: '/', label: 'Home', type: 'custom' } },
  { link: { url: '/about-us', label: 'About Us', type: 'custom' } },
  { link: { url: '/dr-serhat', label: 'Dr. Serhat', type: 'custom' } },
  { link: { url: '/services', label: 'Services', type: 'custom' } },
  { link: { url: '/contact-us', label: 'Contact Us', type: 'custom' } },
]
