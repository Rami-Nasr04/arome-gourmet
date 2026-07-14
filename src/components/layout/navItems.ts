export interface NavItem {
  to: string;
  /** common-namespace i18n key */
  key: string;
  soon?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { to: '/', key: 'nav.home' },
  { to: '/about', key: 'nav.about' },
  { to: '/green-coffee', key: 'nav.green' },
  { to: '/cross-shipment', key: 'nav.cross' },
  { to: '/blend', key: 'nav.blend', soon: true },
  { to: '/cuppa-joy', key: 'nav.cuppa' },
  { to: '/contact', key: 'nav.contact' },
];
