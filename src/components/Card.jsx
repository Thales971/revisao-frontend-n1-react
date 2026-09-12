import { Link } from 'react-router-dom'

export default function Card({ title, description, image, link = '#', linkText = 'Ver mais' }) {
  return (
    <Link to={link} className="block h-full group">
      <div className="bg-navy-800 border border-slate-700 rounded-xl overflow-hidden hover:-translate-y-1 transition h-full flex flex-col">
        <div className="h-44 overflow-hidden bg-navy-700">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-slate-400 mb-4 flex-grow">{description}</p>
          <span className="text-mint-400 font-semibold">{linkText} →</span>
        </div>
      </div>
    </Link>
  )
}
