import HeaderSection from '@/components/sections/HeaderSection'
import WorkoutScetion from '@/components/sections/WorkoutSection'
import Layout from '@/layout/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      {/* Header Section Example */}
      <HeaderSection />
      <WorkoutScetion />
    </Layout>
  )
}
