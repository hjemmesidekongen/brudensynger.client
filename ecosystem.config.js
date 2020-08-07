module.exports = {
  apps: [
    {
      name: 'brudensynger',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'staging',
      },
      env_production: {
        NODE_ENV: 'production',
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
        'npm install && pm2 startOrRestart ecosystem.config.js --env staging',
      'pre-setup': '',
      env: {
        NODE_ENV: 'development',
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
        'npm install && pm2 startOrRestart ecosystem.config.js --env production',
      'pre-setup': '',
      env: {
        NODE_ENV: 'production',
        PORT: 4020,
      },
    },
  },
};
