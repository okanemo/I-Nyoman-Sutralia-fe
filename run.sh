#!/bin/bash
npm i -g http-server && npm i && npm run build && http-server dist/ -p 8080 