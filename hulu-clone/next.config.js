//allowing images to be utilized
module.exports = {
    async redirects() {
        return [
          {
            source: '/details',
            destination: '/',
            permanent: true,
          },
        ]
      },
    images: {
        domains: ["links.papareact.com", "image.tmdb.org"],
    },
};