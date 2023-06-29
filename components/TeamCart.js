import Image from 'next/image'

export default function TeamCart({ img, name }) {
  return (
    <div className="col-4">
      <Image src={img} width={377} height={463} alt={name} />
      <h2 className="mt-6 text-center text-3xl font-bold uppercase ">{name}</h2>
    </div>
  )
}
