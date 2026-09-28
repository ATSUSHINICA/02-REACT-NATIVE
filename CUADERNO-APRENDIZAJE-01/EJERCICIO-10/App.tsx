import { ScrollView, StyleSheet, Text, View } from 'react-native';

const HOURS_DONE = 3.5;
const HOURS_GOAL = 5;
const PERCENT = Math.round((HOURS_DONE / HOURS_GOAL) * 100);

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Buenas tardes,</Text>
      <Text style={styles.user}>Alex ✨</Text>

      <View style={styles.goalCard}>
        <Text style={styles.goalLabel}>OBJETIVO DE ESTUDIO</Text>
        <Text style={styles.hours}>3,5 h</Text>
        <Text style={styles.hoursLabel}>horas de 5 h</Text>

        <View style={styles.progressBackground}>
          <View style={[styles.progress, { width: `${PERCENT}%` }]} />
        </View>

        <Text style={styles.percentage}>{PERCENT}% completado</Text>
      </View>

      <Text style={styles.sectionTitle}>Resumen de hoy</Text>

      <View style={styles.grid}>
        <StatCard icon="📚" value="4" label="Lecciones" />
        <StatCard icon="☕" value="2" label="Descansos" />
        <StatCard icon="🧠" value="85%" label="Concentración" />
        <StatCard icon="✅" value="6" label="Tareas" />
      </View>

      <Text style={styles.sectionTitle}>Sesiones recientes</Text>
      <Activity title="Matemáticas" detail="Álgebra · 45 min" time="10:30" />
      <Activity title="Programación" detail="React Native · 1 h 20 min" time="12:15" />
      <Activity title="Inglés" detail="Vocabulario · 30 min" time="16:00" />
    </ScrollView>
  );
}

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statIcon}>{icon}</Text>
      <View>
        <Text style={styles.statValue}>{value}</Text>
        <Text style={styles.statLabel}>{label}</Text>
      </View>
    </View>
  );
}

function Activity({ title, detail, time }: { title: string; detail: string; time: string }) {
  return (
    <View style={styles.activity}>
      <View style={styles.activityInfo}>
        <Text style={styles.activityTitle}>{title}</Text>
        <Text style={styles.activityDetail}>{detail}</Text>
      </View>
      <Text style={styles.activityTime}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf5ff',
    paddingHorizontal: 20,
  },
  greeting: {
    marginTop: 60,
    color: '#7e22ce',
    fontSize: 17,
  },
  user: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3b0764',
    marginBottom: 24,
  },
  goalCard: {
    backgroundColor: '#3b0764',
    padding: 24,
    borderRadius: 22,
  },
  goalLabel: {
    color: '#d8b4fe',
    fontWeight: 'bold',
  },
  hours: {
    marginTop: 12,
    color: 'white',
    fontSize: 44,
    fontWeight: 'bold',
  },
  hoursLabel: {
    color: '#e9d5ff',
  },
  progressBackground: {
    height: 10,
    backgroundColor: '#6b21a8',
    borderRadius: 5,
    marginTop: 24,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#f0abfc',
  },
  percentage: {
    color: '#e9d5ff',
    marginTop: 9,
  },
  sectionTitle: {
    marginTop: 28,
    marginBottom: 12,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3b0764',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
  },
  statIcon: {
    fontSize: 28,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3b0764',
  },
  statLabel: {
    color: '#7e22ce',
    fontSize: 12,
  },
  activity: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 15,
    marginBottom: 10,
  },
  activityInfo: {
    flex: 1,
  },
  activityTitle: {
    fontWeight: 'bold',
    color: '#3b0764',
  },
  activityDetail: {
    marginTop: 4,
    color: '#7e22ce',
  },
  activityTime: {
    fontWeight: 'bold',
    color: '#a21caf',
  },
});