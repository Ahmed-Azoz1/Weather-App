import AsyncStorage from "@react-native-async-storage/async-storage";

// دالة لتخزين البيانات
export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log("error", error);
    }
}

// دالة لاسترجاع البيانات
export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        console.log("error", error);
    }
}