import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import GroceryItem from './components/GroceryItem';
import PageHeader from './components/PageHeader';
import PageModal from './components/PageModal';

export default function App() {
    const [modalVisible, setModalVisible] = useState(false)
    const [groceryList, setGroceryList] = useState([]);

    return (
        <>
            <PageHeader setModalVisible={setModalVisible} />
            <View style={styles.groceryListContainer}>
                {
                    groceryList.map(groceryItem => <GroceryItem
                        key={groceryItem.id}
                        groceryItem={groceryItem.name}
                    />)
                }
            </View>
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