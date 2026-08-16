export const loader = () => {
  return new Response('google-site-verification: googlecf61621316c46ac8.html', {
    headers: {
      'Content-Type': 'text/html',
    },
  });
};
