import { useState } from 'react';
import useStore from 'store';
import './ImageGrid.css';

const Placeholder = ({ text }) => (
  <div className="image-grid-message">{text}</div>
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
  const error = useStore(state => state.error);
  const images = useStore(state => state.images);
  const loading = useStore(state => state.loading);

  if (error) return <Placeholder text="Problem fetching images" />;
  if (loading) return <Placeholder text="Loading images..." />;
  if (!images?.length) return <Placeholder text="No images" />;

  return (
    <div className="image-grid">
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
