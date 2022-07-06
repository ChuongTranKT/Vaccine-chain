export const MenuHome = [
  {
    id: 1,
    title: 'System manger',
    background:
      'linear-gradient(0deg, rgba(255, 207, 92, 0.5), rgba(255, 207, 92, 0.5))',
    tabMenu: [
      {
        id: 1,
        title: 'Approve role',
        link: '/system-manager/approve-role',
      },
      {
        id: 2,
        title: 'Register vaccine types',
        link: '/system-manager/register-vaccine-types',
      },
    ],
  },
  {
    id: 2,
    title: 'Manufacture',
    background:
      'linear-gradient(0deg, rgba(82, 227, 186, 0.5), rgba(82, 227, 186, 0.5))',
    tabMenu: [
      {
        id: 1,
        title: 'Register vaccine',
        link: '/manufacture/register-vaccine',
      },
    ],
  },
  {
    id: 3,
    title: 'Manufacture & Distributer',
    background:
      'linear-gradient(0deg, rgba(84, 163, 231, 0.5), rgba(84, 163, 231, 0.5))',
    tabMenu: [
      {
        id: 1,
        title: 'Receive vaccine',
        link: '/manufacture-distributer/receive-vaccine',
      },
      {
        id: 2,
        title: 'Transfer vaccine',
        link: '/manufacture-distributer/transfer-vaccine',
      },
      {
        id: 3,
        title: 'Transfer get vaccine right',
        link: '/manufacture-distributer/get-vaccine',
      },
    ],
  },
  {
    id: 4,
    title: 'Approved organization',
    background:
      'linear-gradient(0deg, rgba(255, 100, 124, 0.5), rgba(255, 100, 124, 0.5))',
    tabMenu: [
      {
        id: 1,
        title: 'Approve vaccine',
        link: '/approved-organization/approve-vaccine',
      },
    ],
  },
  {
    id: 5,
    title: 'User',
    background:
      'linear-gradient(0deg, rgba(190, 82, 242, 0.4), rgba(190, 82, 242, 0.4))',
    tabMenu: [
      {
        id: 1,
        title: 'Confirm vaccine',
        link: '/user/confirm-vaccine',
      },
      {
        id: 2,
        title: 'claim role',
        link: '/user/claim-role',
      },
    ],
  },
]
