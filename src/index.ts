import net from 'net';
import { Status, McServer } from './types';

const options: McServer= {
  host: 'mc.stephenduvall.me',
  port: 25565,
}

export default function checkStatus(server: McServer) {
  const start_time = new Date()
  let ping: Number

  const client = net.connect(server, () => {
    ping = Math.round(new Date().getMilliseconds() - start_time.getMilliseconds())

    let buff = Buffer.from([ 0xFE, 0x01 ])
    client.write(buff)
  })

  let data: string

  client.on('data', (d) => {
    data = d.toString()
  })

  client.on('end', () => {
    let server_info = data.split('\x00\x00\x00')

    let res: Status = {
      ping: Number(ping),
      version: server_info[2].replace(/\u0000/g, ''),
      motd: server_info[3].replace(/\u0000/g, ''),
      players: Number(server_info[4].replace(/\u0000/g, '')),
      max_players: Number(server_info[5].replace(/\u0000/g, '')),
    }
  })
}
