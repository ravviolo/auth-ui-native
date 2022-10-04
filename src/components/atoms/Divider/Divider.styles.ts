import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    backgroundColor: colors.background,
    borderColor: colors.textLight,
    borderRadius: 5,
    borderWidth: 1,
    color: colors.textLight,
    padding: 4,
    position: 'absolute',
    textAlign: 'center',
    textTransform: 'uppercase',
    zIndex: 2,
  },
  line: {
    alignSelf: 'stretch',
    backgroundColor: colors.textLight,
    height: 1,
  },
});
