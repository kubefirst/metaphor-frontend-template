import React from 'react';

import Container from '../components/container';

export default function Home({
  metaphorNodeJSApiUrl,
  metaphorNodeGoApiUrl,
}: {
  metaphorNodeJSApiUrl: string;
  metaphorNodeGoApiUrl: string;
}) {
  return (
    <Container
      metaphorNodeJSApiUrl={metaphorNodeJSApiUrl}
      metaphorNodeGoApiUrl={metaphorNodeGoApiUrl}
    />
  );
}

export async function getServerSideProps() {
  const { METAPHOR_JS_API_BASE_URL = '', METAPHOR_GO_API_BASE_URL = '' } = process.env;

  return {
    props: {
      metaphorNodeJSApiUrl: METAPHOR_JS_API_BASE_URL,
      metaphorNodeGoApiUrl: METAPHOR_GO_API_BASE_URL,
    },
  };
}
