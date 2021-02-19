import { useState } from 'react';
import useStore from 'store';
import './ImageGrid.css';

const NoImages = () => (
  <div className="image-grid-empty">No images to display</div>
);

const Image = ({ alt, src }) => {
  const [visible, setVisible] = useState(false);
  const handleLoad = () => setVisible(true);

  return (
    <img
      className={`image-grid-item ${visible ? 'visible' : 'hidden'}`}
      alt={alt}
      src={src}
      onLoad={handleLoad}
    />
  );
};

function ImageGrid() {
  const images = useStore(state => state.images);

  console.log('images', images);

  return (
    <div className="image-grid">
      {!images.length && <NoImages />}
      {images?.map(item => (
        <Image
          alt={item?.alt_description}
          key={item?.id}
          src={item?.urls?.small}
        />
      ))}
    </div>
  );
}

export default ImageGrid;
