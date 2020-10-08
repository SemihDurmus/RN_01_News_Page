
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image
} from 'react-native';


const App: () => React$Node = () => {
  return (
    
    <SafeAreaView style={styles.safearea}>
      <ScrollView style={styles.container}>
        <View style={styles.title_area}>
          <Text style={styles.mainTitle}>News</Text>
        </View>

        <View style={styles.section}>
          <Image style={styles.Image}
                source={require('./images_news/nobel.jpg')}
          />
          <Text style={styles.newsTitle}>Nobel Prize in Medicine awarded to US-UK trio for discovery of hepatitis C virus</Text>
          <Text style={styles.newsText}>The Nobel Assembly said in a news release Monday that the three scientists "made seminal discoveries that led to the identification of a novel virus." It said the trio had "made a decisive contribution to the fight against blood-borne hepatitis, a major global health problem that causes cirrhosis and liver cancer in people around the world."</Text>
        </View>

        <View style={styles.section}>
          <Image style={styles.Image}
                source={require('./images_news/space.jpg')}
          />
          <Text style={styles.newsTitle}>Space is becoming too crowded, Rocket Lab CEO warns</Text>
          <Text style={styles.newsText}>Last week, the CEO of Rocket Lab, a launch startup, said the company is already beginning to experience the effect of growing congestion in outer space. Rocket Lab CEO Peter Beck said that the sheer number of objects in space right now — a number that is growing quickly thanks in part to SpaceX's satellite internet constellation, Starlink — is making it more difficult to find a clear path for rockets to launch new satellites.</Text>
        </View>

        <View style={styles.section}>
          <Image style={styles.Image}
                source={require('./images_news/trees.jpg')}
          />
          <Text style={styles.newsTitle}>US cities are losing 36 million trees a year</Text>
          <Text style={styles.newsText}>Trees provide shade for homes, office buildings, parks and roadways, cooling surface temperatures. They also take in and evaporate water, cooling the air around them. "Just walk in the shade of a tree on a hot day. You can't get that from grass," Nowak said. To get the full temperature benefit, tree canopy cover should exceed 40% of the area to be cooled, according to a recent study in the Proceedings of the National Academy of Sciences. "A single city block would need to be nearly half-covered by a leafy green network of branches and leaves," the authors wrote.</Text>
        </View>

        <View style={styles.section}>
          <Image style={styles.Image}
                source={require('./images_news/wearable.jpg')}
          />
          <Text style={styles.newsTitle}>The wearable cyborgs that use brain waves to power up your muscles</Text>
          <Text style={styles.newsText}>Earlier that year, the Brooks Cybernic Treatment Center in Jacksonville, Florida, became the first US center to use a unique rehabilitative technology developed in Japan -- the Hybrid Assistive Limb (HAL).
HAL -- essentially a wearable cyborg -- helps those with spinal cord injuries and muscular dystrophy regain their movements and strengthen their nerves and muscles. Known as exoskeletons, they're a type of lightweight suit, with joints powered by small electric motors, that serve as mechanical muscle.</Text>
        </View>
          
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: "#e4e4e4",
  },
  container: {
    padding: 10,
    fontSize: 40,
  },
  title_area: {
    backgroundColor: "red",
    marginBottom: 15,
    borderRadius: 20,
  },
  mainTitle: {
    fontSize: 40,
    padding: 10,
    color: "#FFF",
    fontWeight: "700",
    fontFamily: "Arial",
  },
  section: {
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 20,
    borderRadius: 20,
  },
  Image: {
    resizeMode: "cover",
    height: 180,
    width: 370,
    borderRadius: 20,
    alignSelf: "center",
    margin: 15,

  },
  newsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 15,
    color: "brown",
    fontFamily: 'Verdana',

  },
  newsText: {
    fontSize: 15,
    lineHeight: 22,
    fontFamily: 'Verdana',
    margin: 15,
    marginTop: 0,
    textAlign: "justify",
  },
});

export default App;
