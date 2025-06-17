module.exports = {
    apps: [
        {
            name: 'broker-edge-api',
            script: 'dist/index.js',
            instances: 1,
            autorestart: true,
            watch: false,
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
};
