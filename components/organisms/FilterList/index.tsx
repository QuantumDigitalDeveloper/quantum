import React, { useCallback, useEffect } from 'react'
import ButtonList from '../../molecules/ButtonList'
import { listCategory } from '../../../services/list';
import { listPorto } from '../../../services/data-types';

export default function FilterList() {
    const[portoList, setPortoList] = React.useState([]);

    const getPortoList = useCallback( async () => {
        const response = await listCategory();
        setPortoList(response.data);
    }, [listCategory]);

    useEffect(() => {
        getPortoList();
    }, []);
  return (
    <section className="portfolio__menu">
    {portoList.map((item : listPorto) => (
      // eslint-disable-next-line react/jsx-key
      <ButtonList key={item.id} name={item.name} id={item.id} />
    ))}
  </section>
  )
}
