type GalleryProps = {
  images: string[];
}

export default function Gallery({images}: GalleryProps) {
  const firstSixPhoto = images.slice(0, 6);
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">

        {firstSixPhoto.map((image) => (
          <div key={image} className="offer__image-wrapper">
            <img className="offer__image" src={image} alt="Photo studio"/>
          </div>
        ))}
      </div>
    </div>
  );
}
