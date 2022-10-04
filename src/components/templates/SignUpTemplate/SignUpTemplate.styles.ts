import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  footerContainer: {
    flex: 1,
  },
  formContainer: {
    height: 220,
    marginVertical: 60,
  },
  keyboardView: { flex: 1 },
  socialsContainer: {
    marginVertical: 60,
  },
});
