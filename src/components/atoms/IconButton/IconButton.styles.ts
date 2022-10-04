import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 2,
    height: 50,
    justifyContent: 'center',
    padding: 8,
    width: 50,
  },
  icon: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pressed: {
    backgroundColor: colors.textWhite,
  },
});
