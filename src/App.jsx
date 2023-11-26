import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Review from './components/Review/Review'
import Overview from './components/Overview/Overview'
import Location from './components/Location/Map'
import Footer from './components/Footer/Footer'
import ActivityContainer from './components/Activities/ActivityContainer'
import ScrollBar from './components/ScrollBar/ScrollBar'
import PersonReviewContainer from './components/Review/PersonReviewContainer'
import PhotosContainer from './components/PhotosContainer/PhotosContainer'
import { overviewData } from './assets/data'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-appColor flex flex-col items-center'>
      <div className='px-2 py-3 w-full'>
        <NavBar />

      </div>
      <div className='flex flex-col  w-5/6 py-[20px]'>
        <PhotosContainer />
        <Review />
        <div className='grid grid-cols- md:grid-cols-12 pt-[20px] gap-2'>
          <div className='md:col-span-8 '>
            {
              overviewData.map(data =>(
                <div className='pb-2'>
                    <Overview  title={data.title} content={data.content}/>
                  </div>
              ))
            }
          </div>
   

          <div className='md:col-span-4 '>
            <Location />
          </div>
       
        </div>
        <PersonReviewContainer />
        <ActivityContainer />

      </div>
      <ScrollBar />
      <Footer />
    </div>
  )
}

export default App
