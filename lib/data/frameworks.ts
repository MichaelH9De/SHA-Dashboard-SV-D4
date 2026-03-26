import type { Framework } from '@/types/framework'

export const frameworks: Framework[] = [
  {
    id: 'rise',
    name: 'Rise Framework',
    owner: 'Liverpool City Region',
    region: 'North West',
    description: 'Regional social value framework focused on inclusive growth and skills uplift.',
    measureIds: [
      'volunteering-hours',
      'work-experience-weeks',
      'careers-advice-hours',
      'training-hours',
      'digital-inclusion-people',
    ],
  },
  {
    id: 'toms',
    name: 'National TOMs',
    owner: 'Social Value UK',
    region: 'UK',
    description: 'National standardised themes, outcomes and measures for client reporting.',
    measureIds: [
      'local-spend-gbp',
      'apprenticeships-started',
      'wellbeing-sessions',
      'biodiversity-planting-sqm',
      'retrofit-homes',
      'affordable-housing-units',
    ],
  },
  {
    id: 'torus',
    name: 'Torus Community Charter',
    owner: 'Torus Group',
    region: 'North West',
    description: 'Community-led priorities centred on employment, community and local spend.',
    measureIds: [
      'volunteering-hours',
      'work-experience-weeks',
      'local-spend-gbp',
      'community-grants-gbp',
      'digital-inclusion-people',
    ],
  },
  {
    id: 'wellbeing',
    name: 'Wellbeing Accelerator',
    owner: 'Internal',
    region: 'Multi-region',
    description: 'Internal programme tracking health, wellbeing and inclusion outcomes.',
    measureIds: [
      'wellbeing-sessions',
      'training-hours',
      'digital-inclusion-people',
      'careers-advice-hours',
    ],
  },
]
