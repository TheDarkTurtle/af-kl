## Installation
- Run `git clone git@github.com:TheDarkTurtle/af-kl.git` to get the repository
- Make sure Node 18 is used (`nvm use 18`)
- Run `npm i` in /server
- Run `npm i` in /client

## Start
- In /server, run `npm run dev`
  - If you get the EADDRINUSE error, run `sudo lsof -i :4000` then `kill -9 {PID}`
- In /client, run `ng serve -o` 
- Test data: PZIGZ3 / HESP

