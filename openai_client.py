import os
from openai import OpenAI

# Initialize OpenAI client
client = OpenAI(
    base_url="https://api.studio.nebius.ai/v1/",
    api_key=os.environ.get("NEBIUS_API_KEY")
)

def get_chat_completion(messages=[]):
    completion = client.chat.completions.create(
        model="meta-llama/Meta-Llama-3.1-70B-Instruct-fast",
        messages=messages,
        temperature=0.6,
        max_tokens=512,
        top_p=0.9
    )
    return completion.to_json()

