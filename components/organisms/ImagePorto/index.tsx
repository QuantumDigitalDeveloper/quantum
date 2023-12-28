import React, { useCallback, useEffect } from 'react'
import ImageItem from '../../molecules/ImageItem'
import { imagePortoList } from '../../../services/Image'
import { imageDuplicate } from '../../../services/data-types';


export default function ImagePorto() {
  const [imageList, setImageData] = React.useState([]);  

  const getImageList = useCallback(async () => {
    const response = await imagePortoList();
    
    // Filter out duplicates based on category_id
    const uniqueImageList = Array.from(
      new Set(response.data.map((item : imageDuplicate) => item.category_id))
    ).map((categoryId) => {
      // Find the first item with the given category_id
      return response.data.find((item : imageDuplicate) => item.category_id === categoryId);
    });    
    // Do something with uniqueImageList, e.g., set it to state or process it further
    setImageData(uniqueImageList as never[]);
  }, [imagePortoList]);

  useEffect(() => {
   getImageList();
  }, []);
  return (
    <section className="project__page p_relative see__pad">
    <div className="row">
      {imageList.map((item : imageDuplicate) => (
        <ImageItem key={item.id} title={item.category.name} category={item.category.porto.name} thumbnail={item.url} portoId={item.category.porto_id} categoryId={item.category.id}/>
      ))}
    </div>
  </section>
  )
}
