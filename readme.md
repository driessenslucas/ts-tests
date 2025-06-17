# 🧪 LangChain TypeScript Test

This is a small practice script to test LangChain's TypeScript integration using the [@langchain/ollama](https://www.npmjs.com/package/@langchain/ollama) package. It connects to a local Ollama model (`deepseek-r1:14b`), checks for successful invocation, and then streams a response to a prompt while filtering out `<think>` sections.

## 📂 Project Structure

```
.
├── index.js
├── index.ts
├── langchain-test.ts
├── package.json
├── package-lock.json
└── tsconfig.json
```

## 🚀 What It Does

* Initializes a LangChain `Ollama` LLM instance
* Sends a simple prompt to verify connection
* Streams a response to `"tell me a joke"`
* Ignores parts of the response wrapped in `<think>...</think>`
* Prints everything else to `stdout`

## ▶️ Usage

Make sure you have [Ollama](https://ollama.com) running locally with the `deepseek-r1:14b` model available. Then run:

```bash
npx tsx langchain-test.ts
```

## 📦 Tech Stack

* TypeScript
* LangChain
* Ollama
* Node.js
* [tsx](https://github.com/esbuild-kit/tsx) (for running TypeScript directly)

## 📝 Notes

This was just a quick and dirty test to learn how to:

* Set up LangChain with TypeScript
* Use streaming with a local LLM
* Do basic token filtering logic

