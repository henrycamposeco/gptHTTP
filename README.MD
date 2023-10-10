# Project Name: gptHTTP

A http server for exposing a gpt4All API

## Requirements

- node version >= 18.0.0
- npm version >= 10.1.0

## Installation & Run

`npm install`
`npm start`

## Usage

- update the constants.js file to set MODEL_PATH to the right model directory
- update MODEL_NAME
- no need to update the other constants

## API

### Method: POST

#### URL

http://localhost:3000/gpt

#### Request Body

```json
{
  "prompt": "what is water made of?",
  "persona": "default",
  "flush": true
}
```

- prompt: is the text to be completed
- persona: is the persona to be used
    * the src/personas directory contains the personas to be used
    * a persona is a text file with the persona prompt configuration
- flush: is an optional boolean to flush the historical conversations for the persona, src/history directory contains
  the historical conversations for each persona

