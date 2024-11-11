import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

// Define the MenuItem interface
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  course: string;
}

interface AddMenuScreenProps {
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

const AddMenuScreen = ({ menuItems, setMenuItems }: AddMenuScreenProps) => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [course, setCourse] = useState<string>('Starters');

  // Function to add new menu item
  const addMenuItem = () => {
    if (name && description && price && course) {
      const newItem: MenuItem = {
        id: menuItems.length + 1, // Simple id assignment based on length
        name,
        description,
        price: parseFloat(price),
        course,
      };
      setMenuItems([...menuItems, newItem]);

      // Reset form fields
      setName('');
      setDescription('');
      setPrice('');
      setCourse('Starters');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Course"
        value={course}
        onChangeText={setCourse}
      />
      <Button title="Add Menu Item" onPress={addMenuItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default AddMenuScreen;
