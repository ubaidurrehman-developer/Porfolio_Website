import config from '~/config.json';

export const navLinks = [
  { label: 'Work', pathname: '/#work' },
  { label: 'About', pathname: '/#about' },
  { label: 'Experience', pathname: '/#experience' },
  { label: 'Contact', pathname: '/contact' },
];

export const socialLinks = [
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: config.linkedin?.startsWith('http')
      ? config.linkedin
      : `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
];
