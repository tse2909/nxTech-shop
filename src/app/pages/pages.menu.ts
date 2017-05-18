export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: '#/pages/home',
        data: {
          menu: {
            title: 'Home',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: '#/pages/new',
        data: {
          menu: {
            title: 'New',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: '#/pages/sale',
        data: {
          menu: {
            title: 'Sale',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'general.menu.form_inputs',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'general.menu.form_layouts',
              }
            }
          }
        ]
      },
      {
        path: '#/pages/categories/cleanser',
        data: {
          menu: {
            title: 'Cleanser',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        }
      },
      {
        path: '#/pages/categories/toner',
        data: {
          menu: {
            title: 'Toner',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        }
      },
      {
        path: '#/pages/sale',
        data: {
          menu: {
            title: 'Men',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        }
      },
      {
        path: '#/pages/sale',
        data: {
          menu: {
            title: 'Brands',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        }
      }
    
    ]
  }
];
