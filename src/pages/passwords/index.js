import { StyleSheet, Text, View, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native';
import useStorage from '../../hooks/useStorage.js'

import { PasswordItem } from './components/passwordsItem.js'

export function Passwords() {

    const [listPassword, setListPasswords] = useState([])
    const focused = useIsFocused()
    const { getItems, removeItem } = useStorage()
    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItems("@pass")
            setListPasswords(passwords);
        }
        loadPasswords();
    }, [focused])

    async function handleDeletePassword(item) {
    const passwords = await removeItem("@pass", item)
    setListPasswords(passwords)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas Senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList
                style={{ flex:1, paddingTop: 14,}}
                data={listPassword}
                keyExtractor={ (item) => String(item) }
                renderItem={({ item }) => <PasswordItem data={item} removePassword={ () => handleDeletePassword(item)}/>}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#363a40",
        paddingTop: 58,
        paddingBottom: 14,
        paddingRight: 14,
    },
    title: {
        fontSize: 18,
        marginLeft: 14,
        color: "#fff",
        fontWeight: 'bold',
    },
    content: {
        flex:1,
        paddingLeft: 14,
        paddingRight: 14,
    }
})