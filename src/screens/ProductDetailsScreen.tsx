import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { MyAdsStackParamList, Product } from '../navigation/MyAdsStack';

type AdDetailsScreenRouteProp = RouteProp<
  MyAdsStackParamList,
  'ProductDetailsScreen'
>;

const ProductDetailsScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<AdDetailsScreenRouteProp>();
  const { product } = route.params;

  const [activeTab, setActiveTab] = useState<'Product Details' | 'Owner Details'>('Product Details');

  return (
    <View style={styles.container}>
      {/* Header with car image */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Image
          source={product.image}
          style={styles.carImage}
          resizeMode="cover"
        />
        <View style={styles.timerBadge}>
          <Text style={styles.timerText}>⏰ {product.timeLeft}</Text>
        </View>
      </View>

      {/* Toggle Tabs */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            activeTab === 'Product Details' && styles.activeToggleButton,
          ]}
          onPress={() => setActiveTab('Product Details')}
        >
          <Text
            style={[
              styles.toggleButtonText,
              activeTab === 'Product Details' && styles.activeToggleButtonText,
            ]}
          >
            Product Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            activeTab === 'Owner Details' && styles.activeToggleButton,
          ]}
          onPress={() => setActiveTab('Owner Details')}
        >
          <Text
            style={[
              styles.toggleButtonText,
              activeTab === 'Owner Details' && styles.activeToggleButtonText,
            ]}
          >
            Owner Details
          </Text>
        </TouchableOpacity>
      </View>

      {/* Main content scroll view */}
      <ScrollView style={styles.content}>
        {/* Price and Rating Row */}
        <View style={styles.priceRow}>
          <Text style={styles.carPrice}>{product.price}</Text>
          <View style={styles.ratingBox}>
            <Text style={styles.ratingText}>{product.rating}</Text>
            <Icon name="star" size={14} color="#fff" />
          </View>
        </View>
        <Text style={styles.carTitle}>{product.title}</Text>
        <View style={styles.locationRow}>
          <Icon name="map-marker" size={14} color="#999" />
          <Text style={styles.locationText}>{product.location}</Text>
        </View>

        {/* Details Section */}
        <View style={styles.detailsSection}>
          <Text style={styles.sectionTitle}>Details</Text>
          <View style={styles.detailsGrid}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Brand -</Text>
              <Text style={styles.detailValue}>{product.brand}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Model -</Text>
              <Text style={styles.detailValue}>{product.model}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Year -</Text>
              <Text style={styles.detailValue}>{product.year}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Fuel -</Text>
              <Text style={styles.detailValue}>{product.fuel}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>KM driven -</Text>
              <Text style={styles.detailValue}>{product.km} km</Text>
            </View>
          </View>
        </View>

        {/* Description Section */}
        <View style={styles.descriptionSection}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            {product.description}
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.chatButtonText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bidButton}>
          <Text style={styles.bidButtonText}>Start Bidding</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 250,
    backgroundColor: '#fff',
    position: 'relative',
  },
  backButton: {
    padding: 5,
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
  },
  carImage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  timerBadge: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    backgroundColor: '#FFD700',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  timerText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeToggleButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#4A90E2',
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  activeToggleButtonText: {
    color: '#333',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  carPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  ratingText: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 4,
  },
  carTitle: {
    fontSize: 18,
    color: '#333',
    marginTop: 5,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  detailsSection: {
    marginTop: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  detailItem: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
    marginRight: 4,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  descriptionSection: {
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  bottomButtons: {
    flexDirection: 'row',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  chatButton: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: '#E5E5E5',
    borderRadius: 12,
    alignItems: 'center',
    marginRight: 10,
  },
  chatButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  bidButton: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    alignItems: 'center',
  },
  bidButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});