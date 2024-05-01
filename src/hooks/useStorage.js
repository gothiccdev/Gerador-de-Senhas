import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {

    const getItems = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            
            return JSON.parse(passwords) || [];
        } catch(err) {
            console.log("Erro ao buscar, "+ err)
            return [];
        }
    }

    const saveItem = async (key, value) => {
        try {
            let passwords = await getItems(key)

            passwords.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(passwords))
        } catch(err) {
            console.log("Erro ao salvar, " + err)
        }
    }

    const removeItem = async (key, item) => {
        let passwords = await getItems(key)
        let myPasswords = passwords.filter( (password) => {
            return (password !== item)
        })

        await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
        return myPasswords;
        try {

        } catch(err) {
            console.log("Erro ao deletar, " , err)
        }

    }

    return {
        getItems,
        saveItem,
        removeItem
    }

}

export default useStorage;