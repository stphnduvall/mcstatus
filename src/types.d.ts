export interface Status {
  ping?: number;
  version?: string;
  motd?: string;
  players?: number;
  max_players?: number;
}

export interface McServer {
  ip: string;
  port?: number;
}
