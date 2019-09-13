# McStatus ![npm version number](https://img.shields.io/npm/v/mcstatus?style=flat-square)
Very simple npm package that gets the status of a Minecraft server.


## Install
```bash
$ npm install mcstatus
```

## Usage
To check the status of a Minecraft server just import the function, declare your options and then call `checkStatus()`. `checkStatus()` will return a Promise with a `Status` object.

Typescript:
```typescript
import * as McStatus from 'mcstatus'

const options: McStatus.McServer = {
  host: 'mc.stephenduvall.me',
  port: 25565
}

McStatus.checkStatus(options).then(console.log)
// { ping: 501,
//   version: '1.14.4',
//   motd: 'Stephen\'s Christian Minecraft Server',
//   players: 0,
//   max_players: 20 }
```


## Maintainer
[Stephen DuVall](https://github.com/stphnduvall)

## Future
* [ ] Add the ability to pass hostname and port directly into the function without the McServer object
* [ ] Add the ability to not give a port and default it to `25565`
