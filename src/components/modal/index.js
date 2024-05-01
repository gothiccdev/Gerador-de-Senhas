import { View, Text, StyleSheet, TouchableOpacity, Pressable} from "react-native"
import * as Clipboard from 'expo-clipboard'
import useStorage from '../../hooks/useStorage.js'

export function ModalPassword({ password, handleClose }){
    const {getItems, saveItem, removeItem} = useStorage()

    async function handleCopyPassword(){
        await Clipboard.setStringAsync(password)
        await saveItem("@pass", password)

        alert("Senha salva com sucesso!")
        
        handleClose()
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>


                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.text}>
                        {password}
                        </Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
                        <Text style={styles.buttonSaveText}>Salvar senha</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        allignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        backgroundColor: "#363a40",
        width: '85%',
        paddingTop: 24,
        paddingBottom: 24,
        marginLeft: 28,
        alignItems: 'center',
        paddingBottom: 24,
        justifyContent: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFF",
        marginBottom: 24,
    },
    innerPassword: {
        backgroundColor: "#242629",
        width: '90%',
        padding: 14,
        borderRadius: 8,
    },
    text: {
        color: "#FFF",
        textAlign: "center",
    },
    buttonArea: {
        flexDirection: "row", // Deixar um do lado do outro
        width: '90%',
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonText: {
        color: "#FFF",
    },
    button: {
        flex:1,
        alignItems: "center",
        marginTop: 14,
        marginBottom: 24,
        padding: 8,
    },
    buttonSave: {
        backgroundColor: "#5865F2",
        borderRadius: 8,
    },
    buttonSaveText: {
        color: "#FFF",
        fontWeight: "bold",
    },

})