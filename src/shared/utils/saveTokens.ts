import * as SecureStore from 'expo-secure-store';

export async function saveTokens(refresh: string, access: string, userId?: string) {
  await SecureStore.setItemAsync('refresh', refresh);
  await SecureStore.setItemAsync('access', access);
  if (userId) await SecureStore.setItemAsync('userId', userId);
}
