# Instructions
Based on the code provided, the API Base URL for Perplexity is set in the `DEFAULT_PERPLEXITY_HOST` constant, which is defined as `'https://api.perplexity.ai'`.

Here are the files and code changes required to integrate the Perplexity API:

1. `src/lib/apis/openai/index.ts`:
   Update the `openAIAccess` function to handle the 'perplexity' dialect:

   ```typescript
   if (access.dialect === 'perplexity') {
     const perplexityHost = fixupHost(access.oaiHost || DEFAULT_PERPLEXITY_HOST, apiPath);
     return {
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
         'Authorization': `Bearer ${perplexityKey}`,
       },
       url: perplexityHost + apiPath,
     };
   }
   ```

   Update the `generateOpenAIChatCompletion` function to handle the Perplexity API:

   ```typescript
   if (access.dialect === 'perplexity') {
     const { headers, url } = openAIAccess(access, '/v1/chat/completions');
     const response = await fetch(url, {
       method: 'POST',
       headers: headers,
       body: JSON.stringify(body),
     });
     // Handle Perplexity API response
   }
   ```

2. `src/lib/components/chat/MessageInput.svelte`:
   Add a new option or setting for the user to select the "Perplexity" model, in addition to the existing OpenAI models.
   Update the event handlers and data flow to handle the Perplexity API response correctly.

3. `src/lib/components/chat/ResponseMessage.svelte`:
   Update the component to handle the Perplexity API response structure, which may be different from the OpenAI API.

4. `src/lib/constants.ts`:
   Add the `DEFAULT_PERPLEXITY_HOST` constant:

   ```typescript
   export const DEFAULT_PERPLEXITY_HOST = 'https://api.perplexity.ai';
   ```

5. `src/lib/stores.ts`:
   Add a new store or setting for the user to select the Perplexity model, similar to the existing OpenAI model selection.

6. `docs/README.md` (or any other relevant documentation files):
   Document the new Perplexity API integration, including how to set up the Perplexity API key and how to use the Perplexity model in the application.
   Update any existing user guides or tutorials to include the Perplexity API integration.

The key changes are in the `openAIAccess` and `generateOpenAIChatCompletion` functions, where you need to add a new branch to handle the 'perplexity' dialect and construct the Perplexity API endpoint URL and headers. You'll also need to update the request body format and handle the Perplexity API response accordingly.

Additionally, you'll need to update the UI components to add a new option for the Perplexity model, and handle the Perplexity API response in the appropriate components. Finally, don't forget to update the documentation to reflect the new Perplexity API integration.

