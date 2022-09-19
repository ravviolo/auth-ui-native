import { StyleProp, Text, TextStyle, TouchableOpacity } from 'react-native';

interface Props {
  title: string;
  testID: string;
  onPress: () => void;
  style?: StyleProp<TextStyle>;
}

export const TextButton = ({ onPress, title, testID, style }: Props) => {
  return (
    <TouchableOpacity testID={testID} onPress={onPress}>
      <Text style={style}>{title}</Text>
    </TouchableOpacity>
  );
};
