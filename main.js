const Groq = require('groq-sdk');

const groq = new Groq();

async function main() {
  const stream = await groq.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant.',
      },
      {
        role: 'user',
        content: 'What is the weather in San Francisco and in Tokyo? First write a short poem.',
      },
    ],
    tools: [
      {
        type: 'function',
        function: {
          name: 'get_current_weather',
          description: 'Get the current weather in a given location',
          parameters: {
            type: 'object',
            properties: {
              location: {
                type: 'string',
                description: 'The city and state, e.g. San Francisco, CA'
              },
              unit: {
                type: 'string',
                enum: ['celsius', 'fahrenheit']
              }
            },
            required: ['location']
          }
        }
      }
    ],
    model: 'llama-3.3-70b-versatile',
    temperature: 0.5,
    stream: true,
  });
  for await (const chunk of stream) {
    process.stdout.write((JSON.stringify(chunk) || '') + '\n');
  }
}

main();

// > node main.js
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"role":"assistant","content":""},"logprobs":null,"finish_reason":null}],"x_groq":{"id":"req_01jpmhp4mremx857n2f5kf4va5"}}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":"The"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" sun"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" sets"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" slow"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" and"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" paints"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" the"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" sky"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":","},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" \n"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":"In"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" San"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" Francisco"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":","},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" clouds"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" drift"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" by"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":","},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" \n"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":"In"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" Tokyo"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":"'s"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" streets"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":","},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" the"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" neon"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" gle"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":"ams"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":","},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" \n"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":"As"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" weather"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" whispers"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" through"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" the"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" city"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":"'s"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":" dreams"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298878,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"content":".\n\n"},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298879,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"tool_calls":[{"id":"call_re03","type":"function","function":{"name":"get_current_weather","arguments":"{\"location\": \"San Francisco, CA\", \"unit\": \"fahrenheit\"}"},"index":0}]},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298879,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{"tool_calls":[{"id":"call_483b","type":"function","function":{"name":"get_current_weather","arguments":"{\"location\": \"Tokyo, Japan\", \"unit\": \"celsius\"}"},"index":1}]},"logprobs":null,"finish_reason":null}]}
// {"id":"chatcmpl-82997b9c-3191-4877-9c04-8095155a11b8","object":"chat.completion.chunk","created":1742298879,"model":"llama-3.3-70b-versatile","system_fingerprint":"fp_2ddfbb0da0","choices":[{"index":0,"delta":{},"logprobs":null,"finish_reason":"tool_calls"}],"x_groq":{"id":"req_01jpmhp4mremx857n2f5kf4va5","usage":{"queue_time":0.17890535800000001,"prompt_tokens":270,"prompt_time":0.013278771,"completion_tokens":88,"completion_time":0.32,"total_tokens":358,"total_time":0.333278771}}}