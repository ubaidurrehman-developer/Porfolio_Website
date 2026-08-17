import config from '~/config.json';

const { name, url, twitter } = config;
const defaultOgImage = `${url}/social-image.png`;

export function baseMeta({
  title,
  description,
  prefix = name,
  ogImage = defaultOgImage,
  pathname = '',
}) {
  const titleText = [prefix, title].filter(Boolean).join(' | ');
  const canonicalUrl = `${url}${pathname}`;

  const schemaOrgJSONLD = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: name,
    url: url,
    image: `${url}/social-image.png`,
    jobTitle: 'AI Engineer & Machine Learning Specialist',
    worksFor: {
      '@type': 'Organization',
      name: '10Pearls',
    },
    sameAs: [
      `https://github.com/${config.github}`,
      config.linkedin,
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Document AI',
      'Computer Vision',
      'Large Language Models (LLMs)',
      'OCR Pipelines',
      'Python',
      'PyTorch',
      'React',
    ],
  };

  return [
    { title: titleText },
    { name: 'description', content: description },
    { name: 'author', content: name },
    { name: 'keywords', content: 'Ubaid ur Rehman, AI Engineer, Machine Learning Specialist, Document AI, LLM Developer, Computer Vision, Python Developer, Pakistan AI Engineer' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:alt', content: `${name} — AI Engineer Portfolio Banner` },
    { property: 'og:image:width', content: '1280' },
    { property: 'og:image:height', content: '800' },
    { property: 'og:title', content: titleText },
    { property: 'og:site_name', content: name },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:description', content: description },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:description', content: description },
    { property: 'twitter:title', content: titleText },
    { property: 'twitter:site', content: canonicalUrl },
    { property: 'twitter:creator', content: twitter },
    { property: 'twitter:image', content: ogImage },
    { tagName: 'link', rel: 'canonical', href: canonicalUrl },
    {
      'script:ld+json': schemaOrgJSONLD,
    },
  ];
}
