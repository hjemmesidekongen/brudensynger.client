module.exports = {
  apps: [
    {
      name: 'brudensynger.frontend.staging',
      script: 'npm',
      args: 'start',
      watch: true,
      instances: 'max',
      exec_mode: 'cluster',
      error_file: '../logs',
      env: {
        NODE_ENV: 'staging',
        PORT: 4021,
      },
    },
    {
      name: 'brudensynger.frontend.production',
      script: 'npm',
      args: 'start',
      watch: true,
      instances: 'max',
      exec_mode: 'cluster',
      error_file: '../logs',
      env: {
        NODE_ENV: 'production',
        PORT: 4020,
      },
    },
  ],
  deploy: {
    staging: {
      user: 'mn',
      host: '64.225.99.176',
      ref: 'origin/develop',
      repo: 'git@github.com:hjemmesidekongen/brudensynger.client.git',
      path: '/var/www/staging.brudensynger.dk/',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && pm2 startOrRestart ecosystem.config.js --only brudensynger.frontend.staging',
      'pre-setup': '',
    },
    production: {
      user: 'mn',
      host: '64.225.99.176',
      ref: 'origin/master',
      repo: 'git@github.com:hjemmesidekongen/brudensynger.client.git',
      path: '/var/www/brudensynger.dk/',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && pm2 startOrRestart ecosystem.config.js --only brudensynger.frontend.production',
      'pre-setup': '',
    },
  },
};
