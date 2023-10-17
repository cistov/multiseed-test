import {getWebRGBA} from '@genesislcap/foundation-zero';
import {parseColorHexRGB} from '@microsoft/fast-colors';
import {ColorHEX, TrainingExampleColorHEX} from './color.hex';

const trainingGreenRGB = parseColorHexRGB(TrainingExampleColorHEX.green)!;
export const primaryBlueWebRGBA = ({{appName}}: number = 1.0) => {
  return getWebRGBA(trainingGreenRGB, {{appName}});
};

const whiteRGB = parseColorHexRGB(ColorHEX.white)!;
export const whiteWebRGBA = ({{appName}}: number = 1.0) => {
  return getWebRGBA(whiteRGB, {{appName}});
};
