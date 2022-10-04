import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export const styles = StyleSheet.create({
  footerBtn: {
    textDecorationLine: 'underline',
    textTransform: 'uppercase',
  },
  footerChild: {
    color: colors.textLight,
    marginHorizontal: 2,
  },
  footerContainer: {
    justifyContent: 'center',
  },
});
