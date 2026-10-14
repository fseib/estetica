const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.9.99 6.68 2.77a9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44zm8.04-17.48A11.3 11.3 0 0 0 12.04.7C5.77.7.67 5.8.67 12.06c0 2 .52 3.96 1.52 5.68L.57 23.6l6-1.57a11.33 11.33 0 0 0 5.47 1.39h.01c6.26 0 11.36-5.1 11.37-11.36 0-3.04-1.18-5.89-3.34-8.04z" />
  </svg>
)

export const StarIcon = ({ filled = true, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
    <path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" />
  </svg>
)

export const ArrowIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const ChevronIcon = ({ dir = 'right', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth="1.6"
    style={{ transform: dir === 'left' ? 'rotate(180deg)' : undefined }}>
    <path d="M9 6l6 6-6 6" />
  </svg>
)

export const PinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)

export const ClockIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const MailIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
)

export const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
  </svg>
)

export const ServiceIcon = ({ name, size = 34 }) => {
  const paths = {
    face: (
      <>
        <path d="M12 3c-4 0-6.5 3-6.5 7.2 0 4.6 3 8.8 6.5 10.3 3.5-1.5 6.5-5.7 6.5-10.3C18.5 6 16 3 12 3z" />
        <path d="M9.3 10.5h.01M14.7 10.5h.01M9.8 15c1.3.9 3.1.9 4.4 0" />
      </>
    ),
    laser: (
      <>
        <path d="M12 2v6M12 16v6M2 12h6M16 12h6" />
        <circle cx="12" cy="12" r="2.2" />
        <path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      </>
    ),
    body: (
      <>
        <path d="M8 3c0 4 1 6 4 6s4-2 4-6" />
        <path d="M7 21c0-5 1.5-7 1.5-9.5S7 8 8.5 6M17 21c0-5-1.5-7-1.5-9.5S17 8 15.5 6" />
        <path d="M9 15.5c2 .8 4 .8 6 0" />
      </>
    ),
    spa: (
      <>
        <path d="M12 20c-4.4 0-8-2.7-8-6 2.5 0 5.6.9 8 3.2C14.4 14.9 17.5 14 20 14c0 3.3-3.6 6-8 6z" />
        <path d="M12 17.2c-2-2-2.6-4.3-2.6-6.6S10.6 6 12 4c1.4 2 2.6 4.3 2.6 6.6s-.6 4.6-2.6 6.6z" />
      </>
    ),
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth="1.1">
      {paths[name]}
    </svg>
  )
}
