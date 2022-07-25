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
        title: 'Register vaccine type',
        link: '/system-manager/register-vaccine-type',
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
        title: 'Register vaccine Information',
        link: '/manufacture/register-vaccine-info',
      },
      {
        id: 2,
        title: 'Receive vaccine',
        link: '/manufacture/receive-vaccine',
      },
      {
        id: 3,
        title: 'Transfer vaccine',
        link: '/manufacture/transfer-vaccine',
      },
    ],
  },
  {
    id: 3,
    title: 'Distributer',
    background:
      'linear-gradient(0deg, rgba(84, 163, 231, 0.5), rgba(84, 163, 231, 0.5))',
    tabMenu: [
      {
        id: 1,
        title: 'Receive vaccine',
        link: '/distributer/receive-vaccine',
      },
      {
        id: 2,
        title: 'Transfer vaccine',
        link: '/distributer/transfer-vaccine',
      },
      {
        id: 3,
        title: 'Transfer get vaccine right',
        link: '/distributer/transfer-get-vaccine',
      },
    ],
  },
  {
    id: 4,
    title: 'Vaccine Approved organization',
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
        title: 'Register',
        link: '/user/register',
      },
      {
        id: 2,
        title: 'claim role',
        link: '/user/claim-role',
      },
      {
        id: 3,
        title: 'Confirm vaccine',
        link: '/user/confirm-vaccine',
      },
    ],
  },
]
