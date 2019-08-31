import net from 'net';
import { Status, McServer } from './types';

const options: McServer= {
  ip: 'mc.stephenduvall.me',
  port: 25565,
}

let res: Status = {} // Need to figure how to assign vars at different times

function checkStatus(server: McServer): Status {


  return res
}

const start_time = new Date()
const client = net.connect(options.port, options.hostname, () => {

  res.ping = Math.round(new Date().getMilliseconds() - start_time.getMilliseconds())

  let buff = Buffer.from([ 0xFE, 0x01 ])
  client.write(buff)
  console.log(`Ping: ${res.ping}`)
})

let data: string[] = []

client.on('data', (d) => {
  // process.stdout.write(d)
  data.push(d.toString())
})

client.on('end', () => {
  let server_info = data.toString().split('\x00\x00\x00')

  server_info.map(d => {
    d.toString().replace(/\u0000/g, '')
    console.log(d)
  })
})
