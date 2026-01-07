import { TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const BorrowDashboard  = () => {
  return (
    <>
    <SafeAreaView>
      <TextInput placeholder={'Name of item'}/>
      <TextInput placeholder={'Name of borowee'}/>
    </SafeAreaView>
    </>
  )
}