const createEmptyDrumArray = () => new Array(16).fill(false);

// Drum Arrays
let kicks = createEmptyDrumArray();
let snares = createEmptyDrumArray();
let hiHats = createEmptyDrumArray();
let rideCymbals = createEmptyDrumArray();

const getDrumArrayByName = (name) => {
  switch (name) {
    case 'kicks':
      return kicks;
    case 'snares':
      return snares;
    case 'hiHats':
      return hiHats;
    case 'rideCymbals':
      return rideCymbals;
    default:
      return;
  }
};


const toggleDrum = (drumName, iNum) => {
  //iNum is the index number
  const drumType = getDrumArrayByName(drumName);
  //the getDrumArrayByName value will be stored in drumType
  //Below will make sure the drumType and index Number are defined
    if (!drumType || iNum > 15 || iNum < 0) {
      return;
    }
    //Each array is filled with false, this code will change the value in the
    //chosen drum type array to true
    drumType[iNum] = !drumType[iNum]
};

const clear = (drumName) => {
  const drumType = getDrumArrayByName(drumName);
  if (drumType) {
    drumType.fill(false);
  }
};

const invert = (drumName) => {
  const drumType = getDrumArrayByName(drumName);
  if (!drumType) {
    return;
  }
  //Using a for loop to go through each element in the array and flip the the boolean true/false value
  for (let i = 0; i < drumType.length; i++) {
    drumType[i] = !drumType[i];
  }
};
