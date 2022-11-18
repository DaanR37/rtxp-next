/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  i18n: {
     // providing the locales supported by your application
    locales: ["nl-NL", "en-US"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "nl-NL",
  },
}