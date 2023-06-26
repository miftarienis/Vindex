import Image from 'next/image'

export default function WorkoutCart({ title, children, img, left }) {
  return left ? (
    <div className="row mt-16 items-center">
      <div className="col-6">
        <Image src={img} width={550} height={469} alt={title}></Image>
      </div>
      <div className="col-6">
        <h1 className="text-6xl font-bold border-l-8 pl-6 border-green-500">{title}</h1>
        <p className="mt-5 text-xl">{children}</p>
      </div>
    </div>
  ) : (
    <div className="row mt-16 items-center">
      <div className="col-6">
        <h1 className="text-6xl font-bold border-l-8 pl-6 border-green-500">{title}</h1>
        <p className="mt-5 text-xl">{children}</p>
      </div>
      <div className="col-6">
        <Image src={img} width={550} height={469} alt={title}></Image>
      </div>
    </div>
  )
}
