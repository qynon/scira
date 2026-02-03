// Stub connectors - add your own implementation

export type ConnectorProvider = 'google' | 'notion' | 'github' | 'slack';

export interface Connection {
  id: string;
  userId: string;
  provider: ConnectorProvider;
  createdAt: Date;
}

export interface SyncStatus {
  status: 'idle' | 'syncing' | 'error';
  lastSyncAt?: Date;
  error?: string;
}

export async function createConnection(
  _userId: string,
  _provider: ConnectorProvider,
  _credentials: any
): Promise<Connection> {
  throw new Error('Connectors not implemented - add your own integration');
}

export async function listUserConnections(_userId: string): Promise<Connection[]> {
  return [];
}

export async function deleteConnection(_connectionId: string): Promise<void> {
  // Stub
}

export async function manualSync(_connectionId: string): Promise<void> {
  // Stub
}

export async function getSyncStatus(_connectionId: string): Promise<SyncStatus> {
  return { status: 'idle' };
}
