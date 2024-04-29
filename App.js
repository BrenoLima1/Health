import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Title from './src/components/Title';
import Form from './src/components/Form';
import { styles } from './src/components/Form/style';

export default function App() {
  return (
    <View >
      <Title/>
      <Form/>
    </View>
  );
}
