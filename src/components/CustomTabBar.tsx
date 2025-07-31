import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
const { width } = Dimensions.get('window');
const circleSize = width * 0.16;
const innerCircleSize = circleSize * 0.8;
export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const regularTabs = state.routes.filter(r => r.name !== 'Sell Product');
  const sellProductRoute = state.routes.find(r => r.name === 'Sell Product');
  const leftTabs = regularTabs.slice(0, 2);
  const rightTabs = regularTabs.slice(2);

  const renderTab = (route: any) => {
    const index = state.routes.findIndex(r => r.key === route.key);
    const isFocused = state.index === index;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });
      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    };

    const iconName = getIconName(route.name);

    return (
      <TouchableOpacity key={route.key} onPress={onPress} style={styles.tabButton}>
        <Icon name={iconName} size={24} color={isFocused ? '#0A84FF' : '#8E8E93'} />
        <Text style={[styles.tabLabel, { color: isFocused ? '#0A84FF' : '#8E8E93' }]}>
          {getTabLabel(route.name)}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBarContent}>
        <View style={styles.leftTabs}>{leftTabs.map(renderTab)}</View>
        {sellProductRoute && (
          <TouchableOpacity
            onPress={() => {
              const event = navigation.emit({
                type: 'tabPress',
                target: sellProductRoute.key,
                canPreventDefault: true,
              });
              if (!event.defaultPrevented) {
                navigation.navigate(sellProductRoute.name);
              }
            }}
            style={styles.sellTabButton}
          >
            <View style={styles.sellOuterCircle}>
              <View style={styles.sellCircle}>
                <Icon name="add" size={28} color="#fff" />
              </View>
            </View>
            <Text style={styles.tabLabel}>{getTabLabel(sellProductRoute.name)}</Text>
          </TouchableOpacity>
        )}
        <View style={styles.rightTabs}>{rightTabs.map(renderTab)}</View>
      </View>
    </View>
  );
}

function getIconName(name: string) {
  switch (name) {
    case 'Home':
      return 'home';
    case 'Live Bidding':
      return 'gavel';
    case 'My Ads':
      return 'article';
    case 'Profile':
      return 'person';
    case 'Sell Product':
      return 'add';
    default:
      return 'circle';
  }
}

function getTabLabel(name: string) {
  switch (name) {
    case 'Home':
      return 'Home';
    case 'Live Bidding':
      return 'Live Bidding';
    case 'My Ads':
      return 'My Ads';
    case 'Profile':
      return 'Profile';
    case 'Sell Product':
      return 'Sell Product';
    default:
      return name;
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: '#fff',
  },
  tabBarContent: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  leftTabs: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  rightTabs: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  tabButton: {
    alignItems: 'center',
    paddingVertical: 4,
    minWidth: 50,
  },
  tabLabel: {
    fontSize: width * 0.03,
    marginTop: 2,
    textAlign: 'center',
  },
  sellTabButton: {
    alignItems: 'center',
  },
  sellOuterCircle: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#E5E5EA',
    borderWidth: 1,
  },
  sellCircle: {
    width: innerCircleSize,
    height: innerCircleSize,
    borderRadius: innerCircleSize / 2,
    backgroundColor: '#0A84FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
