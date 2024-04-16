class UnifiedLog {
  client_id: string;

  client_secret: string;

  env: 'DEV'|'PROD' = 'DEV';

  constructor(client_id?: string, client_secret?: string) {
    this.client_id = client_id;
    this.client_secret = client_secret;
  }

  start(): {} {
    if (!this.client_id && !this.client_secret) {
      throw new Error('client_id and client_secret are required');
    }
    return 'hello world';
  }
}

export default UnifiedLog;
