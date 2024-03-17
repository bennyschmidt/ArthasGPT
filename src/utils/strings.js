const dotenv = require('dotenv');

const {
  ARTHAS_NAME,
  ART_STYLE,
  WRITING_STYLE,
  WRITING_TONE
} = require('./persona.js');

dotenv.config();

const {
  LLM_FRAMEWORK,
  LANGUAGE_MODEL,
  IMAGE_MODEL,
  DELAY,
  GREETING
} = process.env;

const LOADED_CACHED_QUESTION = 'User question loaded from cache.';
const LOADED_CACHED_QUERY = 'LLM query loaded from cache.';
const LOADED_CACHED_GPT_RESPONSE = 'ChatGPT response loaded from cache.';
const LOADED_CACHED_DALLE_RESPONSE = 'DALL-E response loaded from cache.';
const LOADED_CACHED_KNOWLEDGE = 'Knowledge loaded from cache.';
const CACHE_CLEARED = 'Cache cleared.';
const PREPARING_RESPONSE = 'Preparing response...';
const PREPARING_DISPLAY = 'Preparing response for display...';
const CREATING_VECTOR_STORE = 'Creating vector store...';
const CREATING_QUERY_ENGINE = 'Creating query engine...';
const STARTING = 'Initializing...';
const DONE = 'Done.';
const DEFAULT_ANSWER = 'Unknown answer.';
const CREATING_AGENT = 'Creating Arthas agent...';
const GOODBYE = 'Farewell.';
const BYE = 'bye';
const EXIT = 'exit';
const DALLE_ERROR = 'DALL-E failed to return an image. This could be due to a safety violation, rate limiting, or a network issue.';

const llmFramework = `LLM (${LLM_FRAMEWORK})`;
const llmLogPrefix = `${llmFramework} query:`;
const languageModel = `ChatGPT (${LANGUAGE_MODEL})`;
const gptLogPrefix = `${languageModel} Prompt:`;
const imageModel = `DALL-E (${IMAGE_MODEL})`;
const dalleLogPrefix = `${imageModel} Prompt:`;
const waiting = `Waiting ${DELAY / 1000} seconds...`;

const DEFAULT_NAME = 'Arthas';
const DEFAULT_KNOWLEDGE_URI = 'https://wowpedia.fandom.com/wiki/Arthas_Menethil';
const DEFAULT_ART_STYLE = `Blizzard's World of Warcraft concept art in high resolution like a fine-tuned video game model including each detail and anatomically correct features (if any)`;
const DEFAULT_WRITING_STYLE = 'inspiring but grim, from the year 1200 A.D.';
const DEFAULT_WRITING_TONE = 'slightly annoyed';

const INVALID = 'Missing/invalid';
const CONFIG_ERROR = `${INVALID} configuration.`;
const CONFIG_ERROR_KNOWLEDGE_URI = `${INVALID} knowledge URI.`;
const CONFIG_ERROR_NAME = `${INVALID} name.`;
const CONFIG_ERROR_ART_STYLE = `${INVALID} art style.`;
const CONFIG_ERROR_WRITING_STYLE = `${INVALID} writing style.`;
const CONFIG_ERROR_QUERY = `${INVALID} query.`;

module.exports = {
  LOADED_CACHED_QUESTION,
  LOADED_CACHED_QUERY,
  LOADED_CACHED_GPT_RESPONSE,
  LOADED_CACHED_DALLE_RESPONSE,
  LOADED_CACHED_KNOWLEDGE,
  CACHE_CLEARED,
  PREPARING_RESPONSE,
  PREPARING_DISPLAY,
  CREATING_VECTOR_STORE,
  CREATING_QUERY_ENGINE,
  DEFAULT_ANSWER,
  DEFAULT_NAME,
  DEFAULT_KNOWLEDGE_URI,
  DEFAULT_ART_STYLE,
  DEFAULT_WRITING_TONE,
  DEFAULT_WRITING_STYLE,
  STARTING,
  DONE,
  DEFAULT_ANSWER,
  CREATING_AGENT,
  GOODBYE,
  BYE,
  EXIT,
  DALLE_ERROR,
  CONFIG_ERROR,
  CONFIG_ERROR_KNOWLEDGE_URI,
  CONFIG_ERROR_NAME,
  CONFIG_ERROR_ART_STYLE,
  CONFIG_ERROR_WRITING_STYLE,
  CONFIG_ERROR_QUERY,
  llmFramework,
  llmLogPrefix,
  languageModel,
  gptLogPrefix,
  imageModel,
  dalleLogPrefix,
  waiting
};
