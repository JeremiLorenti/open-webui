function openAIAccess(access, apiPath, perplexityKey) {
  const perplexityHost = fixupHost(access.oaiHost || DEFAULT_PERPLEXITY_HOST, apiPath);
  return {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${perplexityKey}`,
    },
    params: {
      prompt: 'Your chat prompt here', // Add the chat prompt here
    },
    url: perplexityHost + apiPath,
  };
}
