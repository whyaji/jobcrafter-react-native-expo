import { View, Text, Image } from "react-native";

import styles from "./bio.style";
import { images } from "../../../constants";

const Bio = () => {
  return (
    <View style={styles.container}>
        <View style={styles.contentBox}>
          <Image
              style={styles.profilePicture}
              source={images.profile}
          />
        </View>
        
        <Text style={styles.headText}>Wahyu Patriaji</Text>
        <Text style={styles.contextText}>wahyupatriaji@gmail.com</Text>
        <Text style={styles.contextText}>Malang, East Java, ID</Text>

        <View style={styles.contentBox}>
          <Text style={styles.totalProject}>4 Project</Text>
        </View>
    </View>
  );
};

export default Bio;