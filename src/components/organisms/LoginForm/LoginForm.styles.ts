import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export const styles = StyleSheet.create({
  checkboxContainer: {
    justifyContent: 'space-between',
    width: 130,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  secondaryButton: {
    alignSelf: 'flex-end',
    color: colors.textLight,
  },
});
