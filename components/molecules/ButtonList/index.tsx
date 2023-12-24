import router from 'next/router';
import React from 'react'

interface ButtonListProps {
    name: string;
    id: number;
}
export default function ButtonList(props : ButtonListProps) {
    const {name, id} = props

    const handleClick = (id : number) => {
        router.push("/portfolio/filter/[porto_id]", `/portfolio/filter/${id}`);
      };
    
  return (
    <button
        // key={item.id}
        onClick={() => handleClick(id)}
        data-filter=".cat1"
        className=""
      >
        {name}
      </button>
  )
}
