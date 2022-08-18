import * as ExpoPixi from 'expo-pixi';
import { useRef } from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  const sketch = useRef(null);
  const onReady = () => {
    console.log('ready!');
  };
  return (
    <View style={styles.container}>
      <View style={styles.sketchContainer}>
        <ExpoPixi.Sketch
          ref={sketch}
          style={styles.sketch}
          strokeColor={'blue'}
          strokeAlpha={1}
          onReady={onReady}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sketch: {
    flex: 1,
  },
  sketchContainer: {
    height: '100%',
  },
  button: {
    zIndex: 1,
    padding: 12,
    minWidth: 56,
    minHeight: 48,
  },
});