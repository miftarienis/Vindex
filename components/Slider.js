import ReactImageGallery from 'react-image-gallery'

export default function Slider() {
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
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
