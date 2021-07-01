import Card from '../components/Card/Card';

function Favorite({
  items,
  searchValue,
  onChangeSearchInput,
  setSearchValue,
  onAddToCart,
  onAddToFavorite
}) {
  return (
    <div className="content">
      <div className="content-header">
        <h1>Мои закладки</h1>
        <div className="search-block">
          <img src="./img/search.svg" alt="search" />
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          <img
            onClick={() => setSearchValue('')}
            className="removeBtn"
            src="./img/btn-remove.svg"
            alt="removeBtn"
          />
        </div>
      </div>

      <div className="sneakers">
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
              key={index}
              onPlusItem={(obj) => onAddToCart(obj)}
              onFavoriteItem={(obj) => onAddToFavorite(obj)}
              favorited={true}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Favorite;
