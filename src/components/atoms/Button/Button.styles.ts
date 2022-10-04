import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
    elevation: 5,
    padding: 15,
  },
  btnText: {
    color: colors.textWhite,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});
