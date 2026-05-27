const nextConfig = {
  async redirects() {
    return [
      {
        source: '/duocamera',
        destination: '/snapmulti',
        permanent: true,
      },
      {
        source: '/duocamera/privacy',
        destination: '/snapmulti/privacy',
        permanent: true,
      },
      {
        source: '/duocamera/terms',
        destination: '/snapmulti/terms',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
