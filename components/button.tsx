'use client';
import { Text } from 'react-native';
import { callAction } from './server-actions';
import { renderPokemon } from './pokemon';

export default function Button({ title, onPress }) {
  return <Text onPress={renderPokemon}>{title}</Text>;
}
