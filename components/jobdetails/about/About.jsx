import { View, Text } from "react-native";
import styles from "./about.style";
import '../../../utils/i18n'
import { useTranslation } from 'react-i18next';

const About = ({ info }) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>{t("About the job:")}</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  );
};

export default About;
