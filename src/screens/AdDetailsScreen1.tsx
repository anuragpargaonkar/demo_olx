import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const AdDetailsScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState<'product' | 'owner'>('product');

  return (
    <View style={styles.container}>
      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/car.jpeg')} // Replace with your local asset
          style={styles.productImage}
        />
        <TouchableOpacity style={styles.backIcon}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareIcon}>
          <Icon name="share-variant" size={22} color="#fff" />
        </TouchableOpacity>
        <View style={styles.timerBadge}>
          <Icon name="clock-outline" color="#fff" size={14} />
          <Text style={styles.timerText}>00:02:45</Text>
        </View>
      </View>

      {/* Tab Switcher */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'product' && styles.activeTab]}
          onPress={() => setActiveTab('product')}
        >
          <Text style={[styles.tabText, activeTab === 'product' && styles.activeTabText]}>Product Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'owner' && styles.activeTab]}
          onPress={() => setActiveTab('owner')}
        >
          <Text style={[styles.tabText, activeTab === 'owner' && styles.activeTabText]}>Owner Details</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Pricing and rating */}
        <View style={styles.card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.price}>Rs. 2,50,000</Text>
            <Text style={styles.subTitle}>Hero electric optima CX (2025)</Text>
            <View style={styles.locationRow}>
              <Icon name="map-marker" size={16} color="#999" />
              <Text style={styles.locationText}>Baner, Pune</Text>
            </View>
          </View>
          <View style={styles.ratingBox}>
            <Text style={styles.ratingText}>4.3</Text>
            <Icon name="star" size={14} color="#fbc02d" />
          </View>
        </View>

        {/* Details */}
        <Text style={styles.sectionTitle}>Details</Text>
        <View style={styles.detailsBox}>
          <View style={styles.detailsRow}>
            <Text style={styles.label}>Brand - Hero Honda</Text>
            <Text style={styles.label}>Model - Optima CX</Text>
          </View>
          <View style={styles.detailsRow}>
            <Text style={styles.label}>Year - 2025</Text>
            <Text style={styles.label}>Fuel - Electric</Text>
          </View>
          <View style={styles.detailsRow}>
            <Text style={styles.label}>KM driven - 0 km</Text>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.sectionTitle}>Description</Text>
        <View style={styles.descriptionBox}>
          <Text style={styles.label}>
            Lorem ipsum dolor sit amet consectetur. Congue justo facilisi quis non malesuada aliquet
            nisi tincidunt tellus. Gravida cursus iacus iaculis...
          </Text>
        </View>

        {/* Footer buttons */}
        <View style={styles.footerButtons}>
          <TouchableOpacity style={styles.chatBtn}>
            <Text style={styles.chatText}>💬 Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bidBtn}>
            <Text style={styles.bidText}>🏁 Start Bidding</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AdDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    height: 220,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  backIcon: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 6,
    borderRadius: 20,
  },
  shareIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 6,
    borderRadius: 20,
  },
  timerBadge: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#FFBE3D',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timerText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 4,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  tabButton: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    color: '#777',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: '#007aff',
  },
  activeTabText: {
    color: '#007aff',
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#f1f9fe',
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    marginBottom: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  subTitle: {
    fontSize: 13,
    color: '#555',
    marginTop: 4,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  locationText: {
    color: '#777',
    marginLeft: 4,
    fontSize: 13,
  },
  ratingBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    flexDirection: 'row',
    gap: 2,
  },
  ratingText: {
    color: '#000',
    fontWeight: 'bold',
    marginRight: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#000',
  },
  detailsBox: {
    backgroundColor: '#f1f9fe',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    fontSize: 13,
    color: '#444',
  },
  descriptionBox: {
    backgroundColor: '#f1f9fe',
    borderRadius: 10,
    padding: 12,
    marginBottom: 24,
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  chatBtn: {
    flex: 1,
    backgroundColor: '#06293A',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  bidBtn: {
    flex: 1,
    backgroundColor: '#1D6D99',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  chatText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bidText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
