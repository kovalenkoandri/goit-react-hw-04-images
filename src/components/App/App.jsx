import { useState, useEffect } from 'react';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
// import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import { Modal } from 'components/Modal';
import { httpRequest } from 'components/services/api';
import InfiniteScroll from 'react-infinite-scroll-component';


export const App = () => {
  const [articles, setArticles] = useState([]);
  const [input, setInput] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [toggleModal, setToggleModal] = useState(false);
  const [tags, setTags] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    if (!input) return;
console.log(input);
    const getHttp = async (input, page) => {
      setIsLoading(true);
      try {
        const response = await httpRequest(input, page).then(responseHttp => {
          if (responseHttp.data.hits.length === 0) {
            setHasMore(false);
            return [];
          } else {
            setHasMore(true);
            return responseHttp.data.hits;
          }
        });
        if (page > 1) {
          setArticles(prevArticles => [...prevArticles, ...response]);
        } else {
          setArticles([...response]);
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
      {isLoading && <Loader />}
      { (input.length !== 0) && (
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={handleLoadMorePage}
          hasMore={hasMore}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <ImageGallery
            {...{
              articles: articles,
              toggleModal: handleToggleModal,
              setLargeImageURL: handleLargeImageURL,
              setTags: handleSetTags,
              handleLoadMorePage,
              hasMore,
            }}
          />
        </InfiniteScroll>
      )}
      {/* {articles.length > 0 && <Button loadMorePage={handleLoadMorePage} />} */}
    </>
  );
};
