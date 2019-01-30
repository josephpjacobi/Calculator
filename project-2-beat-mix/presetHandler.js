// Use this presets array inside your presetHandler
const presets = require('./presets');


const getPreset = (index) => {
  return presets[index] || null;
};

const createOrUpdatePreset = (index, array) => {
  if (!presets[index]) {
    return;
  }
  presets[index] = array;
  return presets[index];
};

// Complete this function:
const presetHandler = (requestType, presetArrayIndex, newPresetArray) => {
  if (requestType === 'GET') {
    let preset = getPreset(presetArrayIndex);
    if (preset) {
      return [200, preset];
    } else {
      return [404];
    }
  } else if (requestType === 'PUT') {
    const newPreset = createOrUpdatePreset(presetArrayIndex, newPresetArray);
    if (newPreset) {
      return [200, newPreset];
    } else {
      return [404];
    }
  } else {
    return [400];
  }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
