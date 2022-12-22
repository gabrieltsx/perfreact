const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALUZE === 'true',
})

module.exports = withBundleAnalyzer({})