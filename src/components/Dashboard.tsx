import { FC } from 'react';
import { Animated, StyleSheet } from 'react-native';
import View = Animated.View;

const Dashboard: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
      <DashboardGroup title={"# Items out on loan"}/>
      <DashboardGroup title={"# Items overdue"}/>
      </View>
      <View style={styles.row}>
      <DashboardGroup title={"# Items due within 7 days"} />
      <DashboardGroup title={"# Items due within 30 days"} />
      </View>
    </View>
  )
}
interface DashboardGroupProps {
  title: string;
  subtitle?: string;
}


const DashboardGroup: FC<DashboardGroupProps> = ({title, subtitle}) => {
  return (
    <View style={styles.group}>
      <Animated.Text style={styles.title}>{title}</Animated.Text>
      <Animated.Text style={styles.subtitle}>{subtitle}</Animated.Text>
      <View style={styles.separator}/>
      <Animated.Text style={styles.amount}>0</Animated.Text>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row', // Arrange buttons in a row
    justifyContent: 'center',
    marginVertical: 10,
  },
  group: {
    flex: 1, // Buttons will take equal space
    marginHorizontal: 10, // Add some spacing between columns
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  separator: {
    height: 1, // Height of the separator line
    backgroundColor: '#ccc', // Light gray color for the separator
    width: '100%', // Full width
  },
  amount: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 10,
  }
});

export default Dashboard;