import { View, Text, StyleSheet } from 'react-native'

export default function GroceryItem({ groceryItem }) {
    return (
        <View style={styles.groceryItem}>
            <Text style={styles.groceryItemText}>{groceryItem}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    groceryItem: {
        backgroundColor: '#1891fa',
        marginVertical: 5,
        borderRadius: 8,
        padding: 8
    },
    groceryItemText: {
        fontSize: 16,
        color: 'white'
    }
})