import PostSection from '../includes/buildingBlocks/singlePost'
import HomeMainSection from '../includes/homeMainSection'
import HomeLayout from '../includes/layouts/homeLayout'
import SplitSection from '../includes/splitSection'
import SubHeaderSection from '../includes/subHeaderSection'
import styles from '../styles/layouts/Home.module.css'
import WhoWeAre from '../includes/whoWeAre'


export default function Home() {
  return (
    <HomeLayout title="ElegantStone doo - Berane - granit, mermer, qvarc...">
      <HomeMainSection />
      <SubHeaderSection />
      <WhoWeAre />
      <SplitSection />
      <div className="websitePadding">
        <div className={styles.camuflageContainer} loading="lazy" data-mc-src="bf80ba50-ccbe-451c-8709-3deb5f264625#instagram">
          <div className={styles.camuflage}></div>
        </div>
      </div>
      <PostSection />
    </HomeLayout>
  )
}
