export default function Item({name,url,price, desc,onSelect}) {
  return (
    <div  className="bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer p-2 max-w-[140px] text-center"
      onClick={onSelect}>
      <img src={url} alt={name} className='w-full h-25 object-contain' />
         <h3 className="font-bold">{name}</h3>
        <p className="text-xs text-gray-500">{desc}</p>
        <p className="text-indigo-600 font-semibold mt-1">${price}</p>
    </div>
  )
}
