import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import GroceryItem from './components/GroceryItem';
import PageHeader from './components/PageHeader';

export default function App() {
    const [searchText, setSearchText] = useState('')
    const [groceryList, setGroceryList] = useState([{ name: 'Apple', id: 0 }, { name: 'Banana', id: 1 }, { name: 'Meat', id: 2 }, { name: 'Burger', id: 3 }])
    const filteredGroceryList = groceryList.filter(listItem => (
        listItem.name.toLowerCase().includes(searchText.toLowerCase())
    ))

    return (
        <>
            {/* Page Header */}
            <PageHeader
                setSearchText={setSearchText}
                setGroceryList={setGroceryList}
            />

            {/* Grocery List */}
            <ScrollView style={styles.groceryListContainer}>
                {
                    filteredGroceryList.map(groceryItem => <GroceryItem
                        key={groceryItem.id}
                        groceryItem={groceryItem.name}
                    />)
                }
            </ScrollView>
        </>
    );
}


const styles = StyleSheet.create({
    groceryListContainer: {
        margin: 20
    }
})