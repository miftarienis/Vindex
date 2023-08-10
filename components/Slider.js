import ReactImageGallery from 'react-image-gallery'

export default function Slider() {
  const images = [
    {
      original: '/img/1.jpg',
    },
    {
      original: '/img/2.jpg',
    },
    {
      original: '/img/3.jpg',
    },
    {
      original: '/img/4.jpg',
    },
    {
      original: '/img/5.jpg',
    },
    {
      original: '/img/6.jpg',
    },
    {
      original: '/img/7.jpg',
    },
    {
      original: '/img/8.jpg',
    },
    {
      original: '/img/9.jpg',
    },
    {
      original: '/img/10.jpg',
    },
    {
      original: '/img/11.jpg',
    },
    {
      original: '/img/12.jpg',
    },
    {
      original: '/img/13.jpg',
    },
  ]
  return (
    <div className="bg-gray-200" id="gallery">
      <div className="container">
        <div className="row my-20">
          <div className="col-6 w-full h-auto">
            <ReactImageGallery
              items={images}
              showNav={false}
              autoPlay={true}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
