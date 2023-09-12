import * as SecureStore from 'expo-secure-store';

export async function removeTokens() {
  await SecureStore.deleteItemAsync('refresh');
  await SecureStore.deleteItemAsync('access');
  await SecureStore.deleteItemAsync('userId');
}
