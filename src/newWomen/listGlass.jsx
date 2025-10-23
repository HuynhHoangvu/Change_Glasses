import React, { useState } from 'react'
import data from './dataGlasses.json'
import Item from './item'

export default function ListGlass() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-8">
      
      <div className="relative w-80 h-96 bg-gray-200 rounded-lg overflow-hidden">
        <img
          src="/img/model.jpg"
          className="w-full h-full object-cover"
        />
        {selected && (
          <img
            src={`/img/v${selected.id}.png`}
            className="absolute top-24 left-1/2 -translate-x-1/2 w-40"
          />
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-md">
        {data.map((glass) => (
          <Item
            key={glass.id}
            {...glass}
            onSelect={() => setSelected(glass)}
          />
        ))}
      </div>
    </div>
  )
}
