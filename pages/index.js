import PostSection from '../includes/buildingBlocks/singlePost'
import HomeMainSection from '../includes/homeMainSection'
import HomeLayout from '../includes/layouts/homeLayout'
import SubHeaderSection from '../includes/subHeaderSection'


export default function Home() {
  return (
      <HomeLayout>
          <HomeMainSection />
          <SubHeaderSection />
          <PostSection />
      </HomeLayout>

  )
}
