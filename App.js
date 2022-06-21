import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import GroceryItem from './components/GroceryItem';
import PageHeader from './components/PageHeader';
import PageModal from './components/PageModal';

export default function App() {
    const [searchText, setSearchText] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const [groceryList, setGroceryList] = useState([])
    const filteredGroceryList = groceryList.filter(listItem => (
        listItem.name.toLowerCase().includes(searchText.toLowerCase())
    ))

    return (
        <>
            {/* Page Header */}
            <PageHeader
                setModalVisible={setModalVisible}
                setSearchText={setSearchText}
            />

            {/* Grocery List */}
            <View style={styles.groceryListContainer}>
                {
                    filteredGroceryList.map(groceryItem => <GroceryItem
                        key={groceryItem.id}
                        groceryItem={groceryItem.name}
                    />)
                }
            </View>

            {/* Grocery Item Add Modal */}
            <PageModal
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
                setGroceryList={setGroceryList}
            />
        </>
    );
}


const styles = StyleSheet.create({
    groceryListContainer: {
        margin: 20
    }
})