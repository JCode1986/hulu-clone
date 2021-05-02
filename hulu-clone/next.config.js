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
    //allowing images to be utilized
    images: {
        domains: ["links.papareact.com", "image.tmdb.org"],
    },
};