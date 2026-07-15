import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Havenly Solutions',
    short_name: 'Havenly Solutions',
    description: 'South Africa\'s first Stoic Guardian protocol for personal and community safety.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F9F9F9',
    theme_color: '#C0392B',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
