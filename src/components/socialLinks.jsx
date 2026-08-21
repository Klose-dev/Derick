export const socialLinks = [
  {
    href: 'https://wa.me/237682324190',
    label: 'WhatsApp',
    name: 'whatsapp',
  },
  {
    href: 'mailto:sheydericktamfuh@gmail.com',
    label: 'Email',
    name: 'mail',
  },
  {
    href: 'https://www.facebook.com',
    label: 'Facebook',
    name: 'facebook',
  },
  {
    href: 'https://twitter.com',
    label: 'Twitter',
    name: 'twitter',
  },
  {
    href: 'https://www.instagram.com',
    label: 'Instagram',
    name: 'instagram',
  },
]

export function SocialIcon({ name, size = 20 }) {
  const iconProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': true,
  }

  switch (name) {
    case 'whatsapp':
      return (
        <svg {...iconProps}>
          <path d="M20.52 3.48A11.85 11.85 0 0 0 12.07 0C5.55 0 .24 5.3.24 11.82c0 2.08.54 4.1 1.57 5.88L.14 23.8l6.25-1.64a11.76 11.76 0 0 0 5.67 1.44h.01c6.52 0 11.83-5.3 11.83-11.82 0-3.16-1.23-6.13-3.38-8.3ZM12.07 21.6c-1.8 0-3.56-.48-5.08-1.4l-.36-.21-3.71.97.99-3.61-.23-.37a9.75 9.75 0 0 1-1.5-5.16c0-5.43 4.43-9.85 9.88-9.85 2.64 0 5.12 1.03 6.98 2.89a9.77 9.77 0 0 1 2.9 6.96c0 5.43-4.43 9.84-9.87 9.84Zm5.41-7.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.18.2-.35.22-.65.08-1.78-.89-2.95-1.58-4.13-3.58-.31-.53.31-.49.89-1.64.1-.2.05-.37-.03-.52-.08-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.5.71.31 1.26.5 1.69.64.71.22 1.35.19 1.86.12.57-.08 1.75-.72 2-1.42.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.56-.35Z" />
        </svg>
      )

    case 'mail':
      return (
        <svg {...iconProps}>
          <path
            d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m3 7 9 6 9-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case 'facebook':
      return (
        <svg {...iconProps}>
          <path d="M13.5 22v-8h2.8l.42-3H13.5V9.08c0-.87.24-1.46 1.49-1.46H17V4.94c-.33-.04-1.47-.14-2.8-.14-2.77 0-4.67 1.69-4.67 4.79V11H6.3v3h3.13v8h4.07Z" />
        </svg>
      )

    case 'twitter':
      return (
        <svg {...iconProps}>
          <path d="M23.95 4.57a9.83 9.83 0 0 1-2.83.78A4.94 4.94 0 0 0 23.28 2a9.87 9.87 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.38 4.48A13.98 13.98 0 0 1 1.63 2.54a4.92 4.92 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.62v.06a4.92 4.92 0 0 0 3.95 4.83 4.93 4.93 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42A9.87 9.87 0 0 1 .96 18.92 13.92 13.92 0 0 0 8.5 21.13c9.05 0 14-7.5 14-14 0-.21 0-.43-.02-.64a10 10 0 0 0 2.47-2.55Z" />
        </svg>
      )

    case 'instagram':
      return (
        <svg {...iconProps}>
          <path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm-.16 2A3.04 3.04 0 0 0 4 7.04v9.92A3.04 3.04 0 0 0 7.04 20h9.92A3.04 3.04 0 0 0 20 16.96V7.04A3.04 3.04 0 0 0 16.96 4H7.04ZM17.85 5.5a1.28 1.28 0 1 1 0 2.56 1.28 1.28 0 0 1 0-2.56ZM12 6.75A5.25 5.25 0 1 1 12 17.25 5.25 5.25 0 0 1 12 6.75Zm0 2A3.25 3.25 0 1 0 12 15.25 3.25 3.25 0 0 0 12 8.75Z" />
        </svg>
      )

    default:
      return null
  }
}