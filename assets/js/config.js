/**
 * Public chatbot config
 *
 * This file is loaded by index.html and read by app.js via the global CONFIG object.
 * Keep real secrets on a backend service in production.
 */
const CONFIG = {
  // TODO: For local testing only, you may paste a temporary key here.
  // In production, leave this empty and proxy requests through a secure backend.
  GROQ_API_KEY: 'YOUR_GROQ_API_KEY_HERE',
  GROQ_API_URL: 'https://api.groq.com/openai/v1/chat/completions',
  GROQ_MODEL: 'llama3-8b-8192'
};

