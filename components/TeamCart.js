import Image from 'next/image'

export default function TeamCart({ img, name }) {
  return (
    <div className="lg:col-4 mt-5 md:mt-0">
      <Image src={img} width={377} height={463} alt={name} />
      <h2 className="mt-6 text-center md:text-3xl text-xl font-bold uppercase ">{name}</h2>
    </div>
  )
}
