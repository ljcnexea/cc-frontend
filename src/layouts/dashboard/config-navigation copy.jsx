import { useMemo } from 'react';

import { paths } from 'src/routes/paths';

import { useAuthContext } from 'src/auth/hooks';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
  // calendar: icon('lets-icons:calendar-duotone'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { user } = useAuthContext();

  // let items;
  let navigations;

  // Differentiate the list of sidebar for different user role
  if (user?.role === 'admin') {
    switch (user?.admin?.mode) {
      case 'god':
        navigations = [
          {
            roles: ['superadmin'],
            items: [
              { title: 'Dashboard', path: paths.dashboard.root, icon: ICONS.dashboard },
              {
                title: 'Admin',
                path: paths.dashboard.admins,
                icon: ICONS.user,
                children: [
                  {
                    title: 'Lists',
                    path: paths.dashboard.admins,
                  },
                ],
              },
            ],
          },
          {
            items: [
              {
                title: 'Creator',
                path: paths.dashboard.creator.root,
                icon: <Iconify icon="solar:users-group-rounded-bold" />,
                children: [
                  {
                    title: 'Creator',
                    path: paths.dashboard.creator.root,
                    // icon: <Iconify icon="solar:users-group-rounded-bold" />,
                  },
                  {
                    title: 'Media Kits',
                    path: paths.dashboard.creator.mediaKitLists,
                    // icon: <Iconify icon="solar:users-group-rounded-bold" />,
                  },
                ],
              },
            ],
          },
          {
            items: [
              {
                title: 'Landing pages',
                path: paths.dashboard.landing.creator,
                icon: <Iconify icon="fluent:people-team-28-regular" />,
                children: [
                  {
                    title: 'Creator list',
                    path: paths.dashboard.landing.creator,
                    // icon: <Iconify icon="fluent:people-team-28-regular" />,
                  },
                  {
                    title: 'Brands list',
                    path: paths.dashboard.landing.brand,
                    // icon: <Iconify icon="material-symbols:corporate-fare" />,
                  },
                ],
              },
            ],
          },
          {
            items: [
              {
                title: 'Brands',
                path: paths.dashboard.company.discover,
                icon: <Iconify icon="fluent:people-team-28-regular" />,
                children: [
                  {
                    title: 'Discover Brand',
                    path: paths.dashboard.company.discover,
                    // icon: <Iconify icon="fluent:people-team-28-regular" />,
                  },
                  {
                    title: 'Create Brand',
                    path: paths.dashboard.company.create,
                    // icon: <Iconify icon="gridicons:create" />,
                  },
                  {
                    title: 'Manage Brand',
                    path: paths.dashboard.company.manage,
                    // icon: <Iconify icon="mingcute:settings-3-fill" />,
                  },
                ],
              },
            ],

            // items: [
            //   {
            //     title: 'Discover Brand',
            //     path: paths.dashboard.company.discover,
            //     icon: <Iconify icon="fluent:people-team-28-regular" />,
            //   },
            //   {
            //     title: 'Create Brand',
            //     path: paths.dashboard.company.create,
            //     icon: <Iconify icon="gridicons:create" />,
            //   },
            //   {
            //     title: 'Manage Brand',
            //     path: paths.dashboard.company.manage,
            //     icon: <Iconify icon="mingcute:settings-3-fill" />,
            //   },
            // ],
          },
          {
            items: [
              {
                title: 'Campaign',
                path: paths.dashboard.campaign.view,
                icon: <Iconify icon="material-symbols:explore-outline" />,
                children: [
                  {
                    title: 'Discover Campaign',
                    path: paths.dashboard.campaign.view,
                    // icon: <Iconify icon="material-symbols:explore-outline" />,
                  },
                  {
                    title: 'Create Campaign',
                    path: paths.dashboard.campaign.create,
                    // icon: <Iconify icon="gridicons:create" />,
                  },
                  {
                    title: 'Manage Campaign',
                    path: paths.dashboard.campaign.manage,
                    // icon: <Iconify icon="mingcute:settings-3-fill" />,
                  },
                ],
              },
            ],

            // items: [
            //   {
            //     title: 'Discover Campaign',
            //     path: paths.dashboard.campaign.view,
            //     icon: <Iconify icon="material-symbols:explore-outline" />,
            //   },
            //   {
            //     title: 'Create Campaign',
            //     path: paths.dashboard.campaign.create,
            //     icon: <Iconify icon="gridicons:create" />,
            //   },
            //   {
            //     title: 'Manage Campaign',
            //     path: paths.dashboard.campaign.manage,
            //     icon: <Iconify icon="mingcute:settings-3-fill" />,
            //   },
            // ],
          },
        ];
        break;
      case 'normal':
        navigations = [
          {
            items: [{ title: 'Dashboard', path: paths.dashboard.root, icon: ICONS.dashboard }],
          },
          {
            subheader: 'Landing pages',
            items: [
              {
                title: 'Creator list',
                path: paths.dashboard.landing.creator,
                icon: <Iconify icon="fluent:people-team-28-regular" />,
              },
              {
                title: 'Brands list',
                path: paths.dashboard.landing.brand,
                icon: <Iconify icon="material-symbols:corporate-fare" />,
              },
            ],
          },
        ];
        break;
      default:
        break;
    }
  } else {
    navigations = [
      {
        items: [
          { title: 'Dashboard', path: paths.dashboard.root, icon: ICONS.dashboard },
          {
            title: 'Media Kit',
            path: paths.dashboard.creator.mediaKitCreator,
            icon: <Iconify icon="flowbite:profile-card-outline" />,
          },
        ],
      },
    ];
  }

  const data = useMemo(
    () => [
      {
        subheader: 'Cult Creative',
      },
      ...navigations,
      {
        subheader: 'Management',
        roles: ['superadmin'],
        items: [
          {
            title: 'Calendar',
            path: paths.dashboard.calendar.root,
            icon: ICONS.calendar,
          },
        ],
      },
    ],

    [navigations]
  );

  return data;
}
