import Image from 'next/image'
import Link from 'next/link'

export default function WorkoutCart({ title, children, img, id, left }) {
  return left ? (
    <div className="row mt-16 items-center" id={id}>
      <div className="md:col-6">
        <Image src={img} width={550} height={469} alt={title}></Image>
      </div>
      <div className="md:col-6">
        <h1 className="mt-5 md:mt-0 md:text-6xl text-3xl font-bold border-l-8 pl-6 border-green-500">
          {title}
        </h1>
        <p className="mt-5 text-xl">{children}</p>
        <Link
          className="inline-block mt-3 px-10 py-3 bg-green-500 rounded-full uppercase"
          href="#calendar"
        >
          Book
        </Link>
      </div>
    </div>
  ) : (
    <div className="row mt-16 items-center" id={id}>
      <div className="md:col-6">
        <h1 className="mt-5 md:mt-0 md:text-6xl text-3xl font-bold border-l-8 pl-6 border-green-500">
          {title}
        </h1>
        <p className="mt-5 text-xl">{children}</p>
        <Link
          className="inline-block mt-3 px-10 py-3 bg-green-500 rounded-full uppercase"
          href="#calendar"
        >
          Book
        </Link>
      </div>
      <div className="md:col-6 order-first md:order-none">
        <Image src={img} width={550} height={469} alt={title}></Image>
      </div>
    </div>
  )
}
