export interface Origin {
  id: string;
  nameKey: string;
  lat: number;
  lng: number;
  notes: string;
  altitude?: string;
  process?: string;
  grade?: string;
  species: 'Arabica' | 'Robusta' | 'Both';
}

export interface SpecialtyLot {
  origin: string;
  lot: string;
  note: string;
}

// Coordinates point at each country's main coffee-growing region (globe-pin precision).
// PLACEHOLDER trade data — confirm with client: altitude/process/grade values below are
// plausible industry figures, not confirmed Arome Gourmet lot specs.
export const ORIGINS: Origin[] = [
  {
    id: 'brazil',
    nameKey: 'origins.brazil',
    lat: -21.5,
    lng: -45.4,
    notes: 'Nutty, chocolatey base of the world’s great blends',
    altitude: '800–1200m',
    process: 'Natural',
    grade: 'NY 2/3',
    species: 'Both',
  },
  {
    id: 'colombia',
    nameKey: 'origins.colombia',
    lat: 2.5,
    lng: -75.5,
    notes: 'Balanced, caramel-sweet washed arabica',
    altitude: '1400–1800m',
    process: 'Washed',
    grade: 'Supremo 17/18',
    species: 'Arabica',
  },
  {
    id: 'ethiopia',
    nameKey: 'origins.ethiopia',
    lat: 6.7,
    lng: 38.4,
    notes: 'Floral, citrus-bright birthplace of arabica',
    altitude: '1700–2200m',
    process: 'Washed',
    grade: 'Grade 1',
    species: 'Arabica',
  },
  {
    id: 'vietnam',
    nameKey: 'origins.vietnam',
    lat: 12.7,
    lng: 108.1,
    notes: 'Full-bodied robusta for crema-rich espresso',
    species: 'Robusta',
  },
  {
    id: 'costa-rica',
    nameKey: 'origins.costa-rica',
    lat: 9.6,
    lng: -84.0,
    notes: 'Bright, clean high-acidity cup from Tarrazú',
    species: 'Arabica',
  },
  {
    id: 'tanzania',
    nameKey: 'origins.tanzania',
    lat: -3.2,
    lng: 37.3,
    notes: 'Winey, berry-toned peaberry from Kilimanjaro slopes',
    species: 'Both',
  },
  {
    id: 'guatemala',
    nameKey: 'origins.guatemala',
    lat: 14.6,
    lng: -90.7,
    notes: 'Complex, cocoa-spice cups from volcanic highlands',
    altitude: '1500–2000m',
    process: 'Washed',
    grade: 'SHB',
    species: 'Arabica',
  },
  {
    id: 'kenya',
    nameKey: 'origins.kenya',
    lat: -0.4,
    lng: 37.0,
    notes: 'Blackcurrant-bright, intensely juicy AA lots',
    species: 'Arabica',
  },
  {
    id: 'yemen',
    nameKey: 'origins.yemen',
    lat: 15.4,
    lng: 44.2,
    notes: 'Ancient terraced mocha — wild, winey, historic',
    species: 'Arabica',
  },
  {
    id: 'nicaragua',
    nameKey: 'origins.nicaragua',
    lat: 13.1,
    lng: -86.0,
    notes: 'Smooth, honeyed cups from Jinotega and Matagalpa',
    species: 'Arabica',
  },
  {
    id: 'peru',
    nameKey: 'origins.peru',
    lat: -6.8,
    lng: -78.8,
    notes: 'Soft, sweet Andean arabica, often organic-grown',
    species: 'Arabica',
  },
  {
    id: 'panama',
    nameKey: 'origins.panama',
    lat: 8.8,
    lng: -82.4,
    notes: 'Elegant Boquete lots — home of prized Geisha',
    species: 'Arabica',
  },
  {
    id: 'el-salvador',
    nameKey: 'origins.el-salvador',
    lat: 14.0,
    lng: -89.6,
    notes: 'Sweet, rounded Bourbon-variety classics',
    species: 'Arabica',
  },
  {
    id: 'mexico',
    nameKey: 'origins.mexico',
    lat: 16.8,
    lng: -92.6,
    notes: 'Mild, nutty highland cups from Chiapas',
    species: 'Arabica',
  },
  {
    id: 'indonesia',
    nameKey: 'origins.indonesia',
    lat: 4.6,
    lng: 96.8,
    notes: 'Heavy-bodied, earthy Sumatran — low acidity, ideal for blending',
    species: 'Both',
  },
  {
    id: 'honduras',
    nameKey: 'origins.honduras',
    lat: 14.8,
    lng: -88.8,
    notes: 'Sweet, fruit-toned lots from Copán and Marcala',
    species: 'Arabica',
  },
];

export const SPECIALTY_LOTS: SpecialtyLot[] = [
  { origin: 'brazil', lot: 'Rio Minas', note: 'Ideal for Turkish coffee' },
  {
    origin: 'brazil',
    lot: 'Santos Sul de Minas · Delizia',
    note: 'Fancy lots — the blending base for gourmet origins',
  },
  { origin: 'ethiopia', lot: 'Sidamo', note: 'Gourmet floral highland arabica' },
  { origin: 'colombia', lot: 'Supremo', note: 'Large-bean gourmet grade' },
  { origin: 'guatemala', lot: 'Antigua', note: 'Volcanic-soil Central American gourmet' },
  { origin: 'guatemala', lot: 'Huehuetenango', note: 'High-grown, bright and complex' },
];
