'use client';

import { useLocalSearchParams } from 'expo-router';
import * as React from 'react';
import { Text } from 'react-native';

import { renderPokemon } from '@/components/server-actions';

// Loading state that renders while data is being fetched.
function Fallback() {
  return <Text>Loading...</Text>;
}

export default function Pokemon() {

  // Call the server action with the username and access token.
  const profile = React.useMemo(
    () => renderPokemon(),
    []
  );

  // Render the profile asynchronously with React Suspense and a custom loading state.
  return <React.Suspense fallback={<Fallback />}>{profile}</React.Suspense>;
}
