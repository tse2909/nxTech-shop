export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'home',
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
        path: 'mac',
        data: {
          menu: {
            title: 'Mac',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        }
      },
      {
        path: 'iPad',
        data: {
          menu: {
            title: 'iPad',
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
