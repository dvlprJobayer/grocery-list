import { useState } from 'react';
import PageHeader from './components/PageHeader';
import PageModal from './components/PageModal';

export default function App() {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <PageHeader setModalVisible={setModalVisible} />
            <PageModal setModalVisible={setModalVisible} modalVisible={modalVisible} />
        </>
    );
}
