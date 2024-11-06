'use server';

import { Text } from 'react-native';

export default async function renderInfo({ name }) {
  await new Promise(r => setTimeout(r, 2000));
  // Securely fetch data from an API, and read environment variables...
  return <Text>Hello, {name}!</Text>;
}
