import { Text, StyleSheet } from 'react-native';

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({title}: SectionTitleProps) {
  return (
    <Text style={styles.sectionTitle}>
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    marginHorizontal: 10
  }
});