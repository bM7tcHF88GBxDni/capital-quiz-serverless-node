## Overview

- This repository is an internal Lambda API which calls an external, public API for data, normalises this data for our purpose and returns to FE (capital-quiz-vite).

- Please run both repositories simultaneously. This is the Serverless repository, find the [React repository here](https://github.com/johnson-singh-software/capital-quiz-react).

## How To Run Locally

Global dependency:

- serverless
- node v18 or greater (for native fetch)

Dev dependency:

- serverless-offline

Commands:

1. Install serverless globally:

```
npm install serverless -g
```

2. Inside repository

```
npm i
```

3. Run lambda offline with:

```
serverless offline
```

4. A successful console message:

```
$ sls offline
Running "serverless" from node_modules

Starting Offline at stage dev (us-east-1)

Offline [http for lambda] listening on http://localhost:3002
Function names exposed for local invocation by aws-sdk:
           * api: capital-quiz-dev-api

   ┌───────────────────────────────────────────────────────────────────────┐
   │                                                                       │
   │   GET | http://localhost:4000/getQuestion                             │
   │   POST | http://localhost:4000/2015-03-31/functions/api/invocations   │
   │                                                                       │
   └───────────────────────────────────────────────────────────────────────┘
```
