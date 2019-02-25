import React from 'react'
import '../global_css/sideVideo_css/styles.css'


const sideVideos = [
    {
    id: 'biking', 
    title: 'Become A Travel Pro In One Easy Lesson', 
    channel: 'Scott Cranmer', 
    image: '/Assets/Images/video-list-1.jpg' 
    },
    {
      id: 'travel', 
      title: 'Les Houches The Hidden Gem Of The Chamonix', 
      channel: 'Bernard Patrick', 
      image: '/Assets/Images/video-list-2.jpg' 
    },
    {
      id: 'medicine', 
      title: 'Travel Health Useful Medical Information For', 
      channel: 'Lizzie Burton', 
      image: '/Assets/Images/video-list-3.jpg' 
    },
    {
      id: 'travel', 
      title: 'Cheap Airline Tickets Great Ways To Save', 
      channel: 'Emily Harper', 
      image: '/Assets/Images/video-list-4.jpg' 
    },
    {
      id: 'travel', 
      title: 'Take A Romantic Break In A Boutique Hotel', 
      channel: 'Ethan Owen', 
      image: '/Assets/Images/video-list-5.jpg' 
    },
    {
        id: 'travel', 
        title: 'Choose The Perfect Accommodations', 
        channel: 'Lydia Perez', 
        image: '/Assets/Images/video-list-6.jpg' 
    },
    {
        id: 'cruises', 
        title: 'Cruising Destination Ideas', 
        channel: 'Scott Cranmer', 
        image: '/Assets/Images/video-list-7.jpg' 
    },
    {
        id: 'train', 
        title: 'Train Travel On Track For Safety', 
        channel: 'Scotty Cranmer', 
        image: '/Assets/Images/video-list-8.jpg' 
     },          
]


class SideVideo extends React.Component {
  render() {
    const sideVideoList = sideVideos.map((sideVideo, id) => {
      return (
        <div className="nextVideo" key={id}>
          <img src={sideVideo.image} alt={sideVideo.id}/>
          <div className="nextVideo__info">
            <h4 className="nextVideo__title">{sideVideo.title}</h4>
            <p className="nextVideo__channel">{sideVideo.channel}</p>
          </div>
        </div>        
      )
    })

    return (
      <div className="nextVideos">
        <h4>NEXT VIDEO</h4>
        {sideVideoList}
      </div>
    )
  }
}

export default SideVideo