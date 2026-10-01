// Audio module disabled per user request
export const machineAudio = {
  start: async () => false,
  stop: () => {},
  setVolume: () => {},
};
