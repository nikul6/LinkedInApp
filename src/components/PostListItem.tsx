import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Post } from '../types';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

type PostLisItemProps = {
    post: Post
}

type FooterButtonProps = {
    text: string;
    icon: React.ComponentProps<typeof FontAwesome>['name'];
}

function FooterButton({ text, icon }: FooterButtonProps) {
    return (
        <View style={{ flexDirection: 'row' }}>
            <FontAwesome name={icon} size={16} color="gray" />
            <Text style={{ marginLeft: 5, color: 'gray', fontWeight: '500' }}>{text}</Text>
        </View>
    )
}

export default function PostListItem({ post }: PostLisItemProps) {
    return (
        <Link href={`/posts/${post.id}`} asChild>
            <Pressable style={styles.conatiner}>
                <Link href={`/users/${post.author.id}`} asChild>
                <Pressable style={styles.header}>
                    <Image source={{ uri: post.author.image }} style={styles.userImage} />
                    <View>
                        <Text style={styles.userName}>{post.author.name}</Text>
                        <Text>{post.author.position}</Text>
                    </View>
                </Pressable>
                </Link>
                <Text style={styles.content}>{post.content}</Text>
                {post.image && <Image source={{ uri: post.image }} style={styles.postImage} />}
                <View style={styles.footer}>
                    <FooterButton text="Likes" icon="thumbs-o-up" />
                    <FooterButton text="Comments" icon="comment-o" />
                    <FooterButton text="Share" icon="share" />
                </View>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: '#fff',
        // backgroundColor:'green'
        width:'100%',
        maxWidth:500,
        alignSelf:'center'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding:10
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10
    },
    content: {
        margin: 10,
        marginTop: 0
    },
    postImage: {
        width: '100%',
        aspectRatio: 1
    },
    footer: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',
        borderTopWidth: 0.5,
        borderColor: 'lightgray'
    }
})