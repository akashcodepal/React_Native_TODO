import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  return (
    <View style={styles.container}>
      
      {/* Today's task */}
      <View style={styles.tasksContainer}>
        <Text style={styles.sectionTitle}>Today's Task</Text>

        <View style={styles.items}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8EaED",
    flex: 1,
  },
  tasksContainer: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  items:{},
});

export default App;
