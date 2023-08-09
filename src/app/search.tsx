import { FlatList, Text, View } from "react-native";
import users from '../../assets/data/users.json';
import UserListItem from "@/components/UserListItem";
import { useLayoutEffect, useState } from "react";
import { useNavigation } from "expo-router";

export default function SearchScreen() {
    const [serach, setSearch] = useState('');
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerSearchBarOptions: {
                placeholder: 'Search Users',
                onChangeText: setSearch,
            }
        })
    }, [navigation])

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <FlatList
                data={users}
                renderItem={({ item }) => <UserListItem user={item} />}
            />
        </View>
    )
}