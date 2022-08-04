import { colors } from '../color';
const {showMessage} = require('react-native-flash-message');

export const showError = (message) => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: 'red',
    color: 'white',
  });
};

export const showSuccess = (message) => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.primary,
    color: 'white',
  });
};

export const showWarning = (message) => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: 'blue',
    color: 'white',
  });
};
