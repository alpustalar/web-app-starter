export const routeItems = [
  {
    label: 'Ana',
    href: '/',
    child: null,
  },
  {
    label: 'Diger',
    href: '/diger',
    child: [
      {
        label: 'Child 1',
        href: '/diger',
        child: null,
      },
      {
        label: 'Child 2',
        href: '/diger',
        child: null,
      },
    ],
  },
] as const;

export type RouteItem = (typeof routeItems)[number];
