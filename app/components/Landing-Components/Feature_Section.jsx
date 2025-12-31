import React from 'react'
import Feature_Card from './sub_Components/Feature_Card'
import Image from 'next/image'

const Feature_Section = () => {
    const features=[{"title":"End-to-End Encryption","desc":"Your conversations stay private and secure — only between you and your school community."},{"title":"Group Chat","desc":"Collaborate easily with class groups, parent groups, and staff communities — all in one place."},{"title":"Fast & User Friendly","desc":"Intuitive design and smooth performance for effortless messaging anytime, anywhere."},{"title":"Students, Parents, Teacher","desc":"A unified space for real-time updates, discussions, and learning communication."}
        
    ]
  return (
    <section className=" ">
      <div className="FeatureSection container w-[80%] relative mx-auto sm:mt-10 min-h-fit">
         <div className="relative mt-10 sm:mt-20 mx-auto feature-image">
            <Image
              src="/images/mobile2.png"
              alt="SchoolAura"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Top */}
          
            < Feature_Card feature={features[0]} featureCount="feature-1"/>

          {/* Right */}
         
            <Feature_Card feature={features[1]} featureCount="feature-2" />

          {/* Bottom */}
         
            <Feature_Card feature={features[2]} featureCount="feature-3"/>
        

          {/* Left */}
         
            <Feature_Card feature={features[3]} featureCount="feature-4"/>
         
      </div>
    </section>
  )
}

export default Feature_Section