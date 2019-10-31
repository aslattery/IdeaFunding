import { getPollConfig } from '../index';

describe('Methods: getPollConfig', () => {
  const mockVotingSettingsRef = {
    poll: {
      get: jest.fn()
    },
  };

  it('Should resolve id doc.exists', async () => {
    expect.assertions(1);
    const mockData = 'doc.data';
    const mockDoc = {
      exists: true,
      data: jest.fn().mockReturnValue(mockData),
    };
    mockVotingSettingsRef
      .poll
      .get
      .mockImplementationOnce(() => Promise.resolve(mockDoc));

    await expect(getPollConfig(mockVotingSettingsRef))
      .resolves
      .toBe(mockData);
  });

  it.each([
    undefined,
    false,
  ])('Should reject id doc.exists property is %p', async (docExists) => {
    expect.assertions(1);
    const mockData = 'doc.data';
    const mockDoc = {
      exists: docExists,
      data: jest.fn().mockReturnValue(mockData),
    };
    mockVotingSettingsRef
      .poll
      .get
      .mockImplementationOnce(() => Promise.resolve(mockDoc));

    await expect(getPollConfig(mockVotingSettingsRef))
      .rejects
      .toThrow('pollConfig doesn\'t exist, or can\'t be fetched');
  });

  it('Should throw if get() rejects', async () => {
    expect.assertions(1);
    mockVotingSettingsRef
      .poll
      .get
      .mockImplementationOnce(() => Promise.reject(new Error('error')));

    await expect(getPollConfig(mockVotingSettingsRef))
      .rejects
      .toThrow('error');
  });
});
