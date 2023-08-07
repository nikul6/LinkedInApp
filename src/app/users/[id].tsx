import { useLocalSearchParams, useNavigation } from "expo-router";
import { Text, View, Image, StyleSheet, Pressable, ScrollView } from "react-native";
import userJson from '../../../assets/data/user.json';
import { useLayoutEffect, useState } from "react";
import { User } from "@/types";
import ExperienceListItem from "@/components/ExperienceListItem";

export default function UserProfile() {
    const [user, setUser] = useState<User>(userJson);

    const { id } = useLocalSearchParams();
    const navigation = useNavigation();

    const onConnect = () => {
        console.log("connect");
    }

    useLayoutEffect(() => {
        navigation.setOptions({ title: user.name })
    }, [user?.name])

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <Image source={{ uri: user.backImage }} style={styles.backImage} />
                <View style={styles.headerContent}>
                    <Image source={{ uri: user.image }} style={styles.image} />
                    <Text style={styles.name}>{user.name}</Text>
                    <Text>{user.position}</Text>
                    <Pressable onPress={onConnect} style={styles.button}>
                        <Text style={styles.buttonText}>Connect</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>About</Text>
                <Text style={styles.paragraph}>{user.about}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Experience</Text>
                {user.experience?.map((experience) => (
                    <ExperienceListItem key={experience.id} experience={experience} />
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    header: {
        // backgroundColor:'green',
        backgroundColor: '#fff',
        marginBottom: 5
    },
    backImage: {
        width: '100%',
        aspectRatio: 5 / 2,
        marginBottom: -60
    },
    headerContent: {
        padding: 10,
        paddingTop: 0
    },
    image: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#fff'
    },
    name: {
        fontSize: 24,
        fontWeight: '500'
    },
    button: {
        // backgroundColor: 'green',
        backgroundColor: 'royalblue',
        padding: 10,
        alignItems: 'center',
        borderRadius: 50,
        marginVertical: 10
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600'
    },
    section: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 5
    },
    paragraph: {
        lineHeight: 20,
    }
})