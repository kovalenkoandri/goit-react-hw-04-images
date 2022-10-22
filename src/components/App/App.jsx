import { useState, useEffect } from 'react';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import { Modal } from 'components/Modal';
import { httpRequest } from 'components/services/api';

export const App = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [toggleModal, setToggleModal] = useState(false);
  const [tags, setTags] = useState(null);
  useEffect(() => {
    if (!input) return;
    
    const getHttp = async (input, page) => {
      setIsLoading(true);
      try {
        const response = await httpRequest(input, page).then(responseHttp => responseHttp.data.hits);
        if (page > 1) {
          setImages(prevImages => [...prevImages, ...response]);
        } else {
          setImages( [...response]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getHttp(input, page);
  }, [input, page]);
  useEffect(() => {
    !toggleModal && handleClearLargeImageURL(); // clearLargeImageURL
    !toggleModal && handleClearTags(); // clearTags
  }, [toggleModal]);
  const handleToggleModal = () => setToggleModal(!toggleModal);

  const handleLargeImageURL = image => setLargeImageURL(image);

  const handleClearLargeImageURL = () => setLargeImageURL(null);

  const handleSetTags = tags => setTags(tags);

  const handleClearTags = () => setTags(null);

  const handleLoadMorePage = () => setPage(page + 1);

  const handleSubmit = input => {
    setInput(input);
    setPage(1);
  };

  return (
    <>
      {toggleModal && (
        <Modal toggleModal={handleToggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
      <Searchbar onSubmit={handleSubmit} />
      {isLoading ? (
        <Loader />
      ) : (
        <ImageGallery
          {...{
            images: images,
            toggleModal: handleToggleModal,
            setLargeImageURL: handleLargeImageURL,
            setTags: handleSetTags,
          }}
        />
      )}
      {images.length > 0 && <Button loadMorePage={handleLoadMorePage} />}
    </>
  );
};
