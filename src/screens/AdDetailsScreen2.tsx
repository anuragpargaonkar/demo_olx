import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AdDetailsScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [offerPrice, setOfferPrice] = useState(248000);
  const listedPrice = 250000;

  const increase = () => setOfferPrice(p => p + 1000);
  const decrease = () => setOfferPrice(p => Math.max(0, p - 1000));

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Image
          source={{
            uri: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/151881/hero-electric-optima-right-front-three-quarter0.jpeg',
          }}
          style={styles.image}
        />

        {/* Tabs */}
        <View style={styles.tabs}>
          <Text style={[styles.tabText, styles.activeTab]}>Product Details</Text>
          <Text style={styles.tabText}>Owner Details</Text>
        </View>

        {/* Price Box */}
        <View style={styles.priceBox}>
          <View>
            <Text style={styles.price}>Rs. 2,50,000</Text>
            <Text style={styles.title}>Hero electric optima CX (2025)</Text>
            <Text style={styles.location}>📍 Baner, Pune</Text>
          </View>
          <Text style={styles.rating}>4.3 ⭐</Text>
        </View>

        {/* Details Section */}
        <Text style={styles.sectionTitle}>Details</Text>
        <View style={styles.detailsBox}>
          <View style={styles.detailRow}>
            <Text>Brand - Hero Honda</Text>
            <Text>Model - Optima CX</Text>
          </View>
          <View style={styles.detailRow}>
            <Text>Year - 2025</Text>
            <Text>Fuel - Electric</Text>
          </View>
          <View style={styles.detailRow}>
            <Text>KM driven - 0 km</Text>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.sectionTitle}>Description</Text>
        <View style={styles.descriptionBox}>
          <Text>
            Lorem ipsum dolor sit amet consectetur. Congue justo facilisi quis non malesuada
            aliquet nisi tincidunt tellus.
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.chatBtn}>
          <Text style={styles.footerText}>💬 Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bidBtn} onPress={() => setShowModal(true)}>
          <Text style={styles.footerText}>🏁 Bid Start</Text>
        </TouchableOpacity>
      </View>

      {/* Modal: Make Offer */}
      <Modal transparent visible={showModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <TouchableOpacity style={styles.closeBtn} onPress={() => setShowModal(false)}>
              <Icon name="close" size={22} color="#666" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Make Offer</Text>

            {/* Input controls */}
            <View style={styles.amountControl}>
              <TouchableOpacity onPress={decrease}>
                <View style={styles.circleBtn}>
                  <Icon name="minus" size={20} color="#1D6D99" />
                </View>
              </TouchableOpacity>

              <Text style={styles.amountText}>
                ₹ {offerPrice.toLocaleString('en-IN')}
              </Text>

              <TouchableOpacity onPress={increase}>
                <View style={styles.circleBtn}>
                  <Icon name="plus" size={20} color="#1D6D99" />
                </View>
              </TouchableOpacity>
            </View>

            <Text style={styles.listedPrice}>₹ {listedPrice.toLocaleString('en-IN')}</Text>

            <TouchableOpacity style={styles.sendBtn} onPress={() => setShowModal(false)}>
              <Text style={styles.sendText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AdDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  tabText: {
    padding: 12,
    fontWeight: '600',
    color: '#999',
  },
  activeTab: {
    color: '#1D6D99',
    borderBottomWidth: 2,
    borderBottomColor: '#1D6D99',
  },
  priceBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EAF7FF',
    padding: 16,
    margin: 10,
    borderRadius: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    color: '#444',
  },
  location: {
    fontSize: 12,
    color: '#666',
  },
  rating: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    color: '#000',
  },
  sectionTitle: {
    marginLeft: 12,
    marginTop: 10,
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 16,
  },
  detailsBox: {
    backgroundColor: '#EAF7FF',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  descriptionBox: {
    backgroundColor: '#EAF7FF',
    marginHorizontal: 10,
    marginTop: 4,
    padding: 10,
    borderRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    padding: 10,
    width: '100%',
    gap: 10,
  },
  chatBtn: {
    flex: 1,
    backgroundColor: '#06293A',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  bidBtn: {
    flex: 1,
    backgroundColor: '#06293A',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    right: 14,
    top: 14,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  amountControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 20,
  },
  circleBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#1D6D99',
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountText: {
    fontSize: 18,
    fontWeight: '600',
  },
  listedPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sendBtn: {
    backgroundColor: '#06293A',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  sendText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
