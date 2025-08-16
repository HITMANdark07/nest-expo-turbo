import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import Constants from 'expo-constants';

export default function Home() {
  const router = useRouter();

  // Get environment variables from Expo's extra field
  const apiUrl = Constants.expoConfig?.extra?.apiUrl || 'http://localhost:3000';
  const appName = Constants.expoConfig?.extra?.appName || 'Mobile App';
  const nodeEnv = Constants.expoConfig?.extra?.nodeEnv || 'development';
  const debug = Constants.expoConfig?.extra?.debug || false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{appName}</Text>
        <Text style={styles.headerSubtitle}>Environment: {nodeEnv}</Text>
      </View>

      <View style={styles.configCard}>
        <Text style={styles.configTitle}>Configuration</Text>
        <Text style={styles.configText}>API URL: {apiUrl}</Text>
        <Text style={styles.configText}>
          Debug: {debug ? 'Enabled' : 'Disabled'}
        </Text>
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  configCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    marginHorizontal: 8,
    padding: 16,
  },
  configText: {
    color: '#4b5563',
    fontSize: 12,
  },
  configTitle: {
    color: '#1f2937',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  container: {
    backgroundColor: '#f3f4f6',
    flex: 1,
  },
  header: {
    backgroundColor: '#3b82f6',
    marginBottom: 8,
    marginTop: 80,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerSubtitle: {
    color: 'white',
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
