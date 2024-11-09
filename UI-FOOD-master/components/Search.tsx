import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'; 

const Search = ({ placeholder = "Search recipes", onSearch, style }: any) => {
  return (
    <View style={[{...style},styles.searchContainer]}>
      <Icon name="search" type="font-awesome" size={24} color="gray" style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        onChangeText={onSearch} // Triggering search input
        autoCapitalize="none" // Prevent auto-capitalization
        returnKeyType="search" // Change return key to search
      />
    </View>
  );
};

// Styles for the SearchComponent
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0', // Background color for the search container
    borderRadius: 8,
    height: 50,
    marginVertical: 10,
  },
  searchIcon: {
    marginRight: 10, // Space between the icon and the input
  },
  searchInput: {
    flex: 1, // Make the input take up the remaining space
    height: '100%',
    fontSize: 16,
    color: '#333',
    paddingVertical: 0,
  },
});

export default Search;
