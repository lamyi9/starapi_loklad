export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'your-bucket-name.s3.your-region.amazonaws.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'your-bucket-name.s3.your-region.amazonaws.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      formLimit: '512mb',
      jsonLimit: '512mb',
      textLimit: '512mb',
      formidable: {
        maxFileSize: 512 * 1024 * 1024, // 512MB
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];