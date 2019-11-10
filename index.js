import { NativeModules } from 'react-native';

const { RNMidi } = NativeModules;

RNMidi.setup();

export default RNMidi;
