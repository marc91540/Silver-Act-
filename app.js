var apos = require('apostrophe')({
  shortName: 'SilverAct',
  title: 'SilverAct',

  // These are the modules we want to bring into the project.
  modules: {
    // This configures the apostrophe-users module to add an admin-level
    // group by default
    'apostrophe-users': {
      groups: [
        {
          title: 'guest',
          permissions: [ ]
        },
        {
          title: 'admin',
          permissions: [ 'admin' ]
        }
      ]
    },
    // This configures the apostrophe-assets module to push a 'site.less'
    // stylesheet by default
    'apostrophe-assets': {
      stylesheets: [
        {
          name: 'home'
        },
        {
          name: 'activity'
        },
        {
          name: 'responsive'
        },
        {
          name: 'reset-css'
        },
        {
          name: 'video-js'
        },
        {
          name: 'video-js.min'
        }, 
        {
          name: 'video.min'
        },
        {
          name: 'recherche_activite'
        },
        {
          name: 'responsive_activite'
        },
        {
          name: 'about_us'
        },
        {
          name: 'animateur'
        },
        {
          name: 'animateur-responsive'
        },
        {
          name: 'coffret'
        },
        {
          name: 'customer'
        },
        {
          name: 'customer-responsive'
        },
        {
          name: 'coffret-responsive'
        },
        {
          name:'http://fonts.googleapis.com/css?family=Lobster'
        },
        {
          name: 'http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic'
        }
      ],
      scripts : [
        {
          name: 'home'
        },
        {
          name: 'about_us'
        },
        {
          name: 'recherche_activite'
        }
      ]
    },
    // This configures our default page template
    'apostrophe-pages': {
      types: [
        {
          name: 'home',
          label: 'Home'
        },
        {
          name: 'activite',
          label: 'Activite'
        },
        {
          name: 'recherche_activite',
          label: 'Recherche_activite'
        },
        {
          name: 'recherche_activiteB',
          label: 'Recherche_activiteB'
        },
        {
          name: 'about_us',
          label: 'About_us'
        },
        {
          name: 'animateur',
          label: 'Animateur'
        },
        {
          name: 'coffret',
          label: 'Coffret'
        },
        {
          name: 'Customer',
          label: 'custumer'
        }
      ]
    }
    // Add your modules and their respective configuration here!
  }

});
