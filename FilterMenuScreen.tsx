import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

// Define the MenuItem interface (if not already defined)
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  course: string;
}

// Explicitly define the type for props, including the menuItems array
interface FilterMenuScreenProps {
  menuItems: MenuItem[];
}

const FilterMenuScreen = ({ menuItems }: FilterMenuScreenProps) => {
  const [selectedCourse, setSelectedCourse] = useState<string>('Starters');
  
  // Filter the menu items by the selected course
  const filteredMenuItems = menuItems.filter(item => item.course === selectedCourse);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filter Menu by Course</Text>

      {/* Buttons to filter by course */}
      <View style={styles.filterButtons}>
        <Button title="Starters" onPress={() => setSelectedCourse('Starters')} />
        <Button title="Mains" onPress={() => setSelectedCourse('Mains')} />
        <Button title="Desserts" onPress={() => setSelectedCourse('Desserts')} />
      </View>

      {/* Display filtered menu items */}
      <FlatList
        data={filteredMenuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>Price: ${item.price.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default FilterMenuScreen;

