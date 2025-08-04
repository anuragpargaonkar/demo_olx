import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatScreen = () => {
  const messages = [
    { id: '1', text: 'Lorem ipsum dolor sit amet consectetur.', sender: 'me', time: '05:00 PM', seen: true },
    { id: '2', text: 'Lorem ipsum dolor sit amet consectetur.', sender: 'other', time: '05:00 PM' },
    { id: '3', text: 'Lorem ipsum dolor sit amet consectetur.', sender: 'other', time: '05:00 PM' },
    { id: '4', text: 'Lorem ipsum dolor sit amet consectetur.', sender: 'me', time: '05:00 PM' },
    { id: '5', text: 'Lorem ipsum dolor sit amet consectetur.', sender: 'other', time: '05:00 PM' },
    { id: '6', text: 'Lorem ipsum dolor sit amet consectetur.', sender: 'me', time: '05:00 PM' },
    { id: '7', text: 'Lorem ipsum dolor sit amet consectetur.', sender: 'other', time: '05:00 PM' },
    { id: '8', text: 'Lorem ipsum dolor sit amet consectetur.', sender: 'me', time: '05:00 PM' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
          style={styles.avatar}
        />
        <Text style={styles.username}>Sanjay Chaudhari</Text>
        <View style={styles.icons}>
          <Icon name="phone" size={22} color="#000" style={styles.icon} />
          <Icon name="dots-vertical" size={22} color="#000" />
        </View>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 10 }}
        renderItem={({ item }) => {
          const isMe = item.sender === 'me';
          return (
            <View style={[styles.messageContainer, isMe ? styles.messageRight : styles.messageLeft]}>
              <View style={[styles.bubble, isMe ? styles.bubbleRight : styles.bubbleLeft]}>
                <Text style={styles.messageText}>{item.text}</Text>
              </View>
              <View style={styles.meta}>
                {isMe && item.seen && <Text style={styles.seenText}>Seen</Text>}
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  username: {
    fontWeight: '600',
    fontSize: 16,
    flex: 1,
  },
  icons: {
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    marginRight: 10,
  },
  messageContainer: {
    marginVertical: 6,
    maxWidth: '80%',
  },
  messageLeft: {
    alignSelf: 'flex-start',
  },
  messageRight: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  bubble: {
    padding: 10,
    borderRadius: 12,
  },
  bubbleLeft: {
    backgroundColor: '#CDEAF9',
    borderBottomLeftRadius: 0,
  },
  bubbleRight: {
    backgroundColor: '#06293A',
    borderBottomRightRadius: 0,
  },
  messageText: {
    color: '#fff',
  },
  meta: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 2,
  },
  time: {
    fontSize: 10,
    color: '#666',
  },
  seenText: {
    fontSize: 10,
    color: '#666',
  },
});
