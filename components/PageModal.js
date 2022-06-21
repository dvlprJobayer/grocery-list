import { View, Text, Image, Pressable, TextInput, Modal, StyleSheet } from 'react-native'
import React from 'react'

export default function PageModal(props) {
    return (
        <Modal
            animationType="slide"
            transparent
            visible={props.modalVisible}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalHeaderText}>Add Grocery</Text>
                        <Pressable onPress={() => props.setModalVisible(false)}>
                            <Image source={require('../assets/img/close.png')} style={{ height: 24, width: 24 }} />
                        </Pressable>
                    </View>
                    <View style={styles.modalBody}>
                        <View>
                            <Text>Grocery Name</Text>
                            <View style={styles.modalInput}>
                                <TextInput placeholder='Add Grocery' />
                            </View>
                        </View>
                        <Pressable>
                            <View style={styles.modalBtn}>
                                <Text style={{ color: 'white', fontWeight: '600' }}>Add Grocery Item</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, .5)',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    modalContainer: {
        backgroundColor: 'white',
        width: '100%',
        padding: 16,
        borderTopStartRadius: 16,
        borderTopEndRadius: 16
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    modalHeaderText: {
        fontSize: 16,
        fontWeight: '600'
    },
    modalBody: {
        marginTop: 20
    },
    modalInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        fontSize: 16,
        padding: 8,
        marginTop: 5
    },
    modalBtn: {
        marginTop: 15,
        backgroundColor: '#1891fa',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center'
    }
})