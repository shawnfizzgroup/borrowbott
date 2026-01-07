import Dashboard from '../components/Dashboard.tsx';
import Actions from '../components/Actions.tsx';
import Titlebar from '../components/Titlebar.tsx';
import { StyleSheet, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Titlebar />
      </View>
      <View style={styles.dashboard}>
        <Dashboard />
      </View>
      <View style={styles.actions}>
        <Actions />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // explicit vertical stack
  },
  title: {
    // keep natural height (no flex) so it doesn't expand
  },
  dashboard: {
    flex: 1, // dashboard fills remaining space
  },
  actions: {
    // fixed height or natural height for action buttons
    flex: 1,
    paddingVertical: 8,
  },
});
