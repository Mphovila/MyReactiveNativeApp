import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  course: string;
}

const HomeScreen = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: 1, name: 'Caesar Salad', description: 'Crispy lettuce with Caesar dressing', price: 8.99, course: 'Starters' },
    { id: 2, name: 'Steak', description: 'Juicy grilled steak', price: 25.5, course: 'Mains' },
    { id: 3, name: 'Cheesecake', description: 'Rich and creamy cheesecake', price: 6.75, course: 'Desserts' },
    { id: 4, name: 'Soup', description: 'Hot and delicious soup', price: 5.0, course: 'Starters' },
  ]);

  // Function to calculate the average price per course
  const calculateAveragePrice = () => {
    const totals: { [key: string]: { total: number; count: number } } = {};

    menuItems.forEach(({ course, price }) => {
      if (!totals[course]) {
        totals[course] = { total: 0, count: 0 };
      }
      totals[course].total += price;
      totals[course].count += 1;
    });

    return Object.entries(totals).map(([course, { total, count }]) => ({
      course,
      average: count ? total / count : 0,
    }));
  };

  const averages = calculateAveragePrice();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home Screen</Text>
      <Text style={styles.subHeader}>Average Prices by Course</Text>

      {averages.length === 0 ? (
        <Text style={styles.noDataText}>No menu items available.</Text>
      ) : (
        <FlatList
          data={averages}
          keyExtractor={(item) => item.course}
          renderItem={({ item }) => (
            <View style={styles.averageItem}>
              <Text style={styles.courseName}>{item.course}</Text>
              <Text style={styles.averagePrice}>
                Average Price: ${item.average.toFixed(2)}
              </Text>
            </View>
          )}
        />
      )}

      <Text style={styles.subHeader}>Menu Items</Text>
      {menuItems.length === 0 ? (
        <Text style={styles.noDataText}>No menu items available.</Text>
      ) : (
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.menuItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text>Description: {item.description}</Text>
              <Text>Course: {item.course}</Text>
              <Text>Price: ${item.price.toFixed(2)}</Text>
            </View>
          )}
        />
      )}
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
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  noDataText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  averageItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  averagePrice: {
    fontSize: 16,
    color: '#555',
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

export default HomeScreen;
