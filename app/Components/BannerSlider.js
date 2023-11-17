import React from 'react'
import SliderFullWidth from './SliderFullWidth/SliderFullWidth'
import slide1 from '@/public/young-woman-with-beautiful-blond-hair-gentle-smile-dressed-green-robe-with-belt-is-working-greenhouse.jpg'
import slide2 from '@/public/bouquet-flowers-suculents-hands-women-mobile-shooting-from-aside.jpg'
import slide3 from '@/public/pexels-lil-artsy-1624076.jpg'
import slide4 from '@/public/pexels-fauxels-3228769.jpg'
function BannerSlider() {
    const data=[
       { title:'Flower 2023 Trends',subTitle:'Lorem ipsum dolor sit amet, pri autem nemore bonorum te. Autem fierent ullamcorper ius no, nec ea quodsi invenire. ' ,id:'sb-1' ,src:slide1},
       { title:'Flowers and Candle ',subTitle:'Lorem ipsum dolor sit amet, pri autem nemore bonorum te. Autem fierent ullamcorper ius no, nec ea quodsi invenire. ' ,id:'sb-2' ,src:slide2},
       { title:'Flower 2023 Trends',subTitle:'Lorem ipsum dolor sit amet, pri autem nemore bonorum te. Autem fierent ullamcorper ius no, nec ea quodsi invenire. ' ,id:'sb-3' ,src:slide3},
       { title:'Flower 2023 Trends',subTitle:'Lorem ipsum dolor sit amet, pri autem nemore bonorum te. Autem fierent ullamcorper ius no, nec ea quodsi invenire. ' ,id:'sb-4' ,src:slide4}

    ]
  return (
    <div>
        <SliderFullWidth data={data}/>
    </div>
  )
}

export default BannerSlider