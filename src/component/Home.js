import React from 'react'
import TopBarner from './HomeBarner/TopBarner'
import TheLatest from './HomeBarner/TheLatest'
import TopStories from './HomeBarner/TopStories'


const Home = () => {
  return (
    <div>
        <TopBarner/>
        <TheLatest/>
        <TopStories/>
    </div>
  )
}

export default Home
