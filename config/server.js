module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1339),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '12901ae1ecb82ce33e6eb7ab0e2dd78a'),
    },
  },
});
