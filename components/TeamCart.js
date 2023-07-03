import Link from 'next/link'

export default function TeamCart({ img, name, title }) {
  return (
    <div className="lg:col-4 text-center mt-5 md:mt-0">
      <div
        style={{ background: `url(${img}) no-repeat center center / cover`, height: '463px' }}
        className="relative group items-center"
      >
        <div className="absolute flex flex-col justify-center inset-0 p-8 transition-all duration-500 ease-in-out bg-black opacity-0 group-hover:opacity-70">
          <h2 className="text-center text-green-500 md:text-3xl text-xl uppercase font-semibold">
            {title}
          </h2>
          <Link className="mt-3 px-10 py-3 bg-green-500 rounded-full uppercase" href="/#calendar">
            Book
          </Link>
        </div>
      </div>
      <h2 className="mt-6 text-center md:text-3xl text-xl font-bold uppercase ">{name}</h2>
    </div>
  )
}
