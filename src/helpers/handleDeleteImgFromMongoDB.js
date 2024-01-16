// удаляет одно фото из массива фоток
// data - массив фоток
// id - динамический параметр страницы, он же родительский элемент, в котором содержится массив с фотками
// item - значение выбранной фотки (publicId)
// func - в данном случае mutate from fetcher

export  const handleDeleteImgFromMongoDB = async (data, id, item, func) => {
    const newArr = data.photos.filter((el) => el !== item);
    try {
      await fetch(`/api/products/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          photos: newArr,
        }),
      });
      // автоматически обновляет страницу при изменении кол-ва карточек (mutate from fetcher)
      func();
    } catch (error) {
      console.log(error);
    }
  };