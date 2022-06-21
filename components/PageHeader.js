import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'

export default function PageHeader(props) {
    function addRandomItem() {
        const str = "abcdefghijklmnopqrstuvwxyz";
        const randomText = Array(5).join().split(',').map(function () {
            return str.charAt(Math.floor(Math.random() * str.length))
        }).join('')
        const randomTextCapital = randomText.charAt(0).toUpperCase() + randomText.slice(1)
        props.setGroceryList(currentGroceryList => (
            [...currentGroceryList, { name: randomTextCapital, id: currentGroceryList.length }]
        ))
    }

    return (
        <View style={styles.pageHeader}>
            <View style={styles.searchBar}>
                <TextInput
                    onChangeText={inputText => props.setSearchText(inputText)}
                    placeholder='Search'
                />
            </View>
            <Pressable onPress={addRandomItem} style={{ flex: 1, marginLeft: 10 }}>
                <View style={styles.searchButtonContainer}>
                    <Text style={{ fontSize: 30, color: 'white' }}>+</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    pageHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        marginHorizontal: 16
    },
    searchBar: {
        flex: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 8,
    },
    searchButtonContainer: {
        backgroundColor: '#1891fa',
        padding: 5,
        borderRadius: 8,
        alignItems: 'center'
    }
})