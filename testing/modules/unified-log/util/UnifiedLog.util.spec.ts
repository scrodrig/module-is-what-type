import UnifiedLog from './UnifiedLog.util.js';

describe('UnifiedLog', () => {
  it('should throw an error when neither client_id nor client_secret was defined', () => {
    const unifiedLog = new UnifiedLog();
    expect(() => unifiedLog.start()).toThrow(
      Error('client_id and client_secret are required')
    );
  });

  it('renders with the correct text', () => {
    const unifiedLog = new UnifiedLog('client_id', 'client_secret');
    expect(unifiedLog.start()).toEqual('hello world');
  });
});
