module.exports = {
  apps: [
    {
      name: 'brudensynger.frontend.staging',
      script: 'npm',
      args: 'start',
      error_file: '../logs/XXXerr.log',
      out_file: '../logs/XXXout.log',
    },
    {
      name: 'brudensynger.frontend.production',
      script: 'npm',
      args: 'start',
      instances: 'max',
      exec_mode: 'cluster',
      error_file: '../logs/XXXerr.log',
      out_file: '../logs/XXXout.log',
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
      env: {
        NODE_ENV: 'staging',
        PORT: 4021,
      },
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
      env: {
        NODE_ENV: 'production',
        PORT: 4020,
      },
    },
  },
};
