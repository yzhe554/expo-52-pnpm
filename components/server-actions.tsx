'use server';

// Optional: Import "server-only" for sanity.
import 'server-only';

import { View, Image, Text } from 'react-native';
import { pokemon1 } from '@/data/pokemon1';

export async function renderPokemon() {
  let json;
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/7');
    const json = await res.json();
  } catch {
    console.log('catch')
    json = pokemon1;
  }
  return (
    <View style={{ padding: 8, borderWidth: 1 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{json.name}</Text>
      <Image source={{ uri: json.sprites.front_default }} style={{ width: 100, height: 100 }} />

      {json.abilities.map(ability => (
        <Text key={ability.ability.name}>- {ability.ability.name}</Text>
      ))}
    </View>
  );
}
