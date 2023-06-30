import TeamCart from '../TeamCart'

export default function TeamSection() {
  return (
    <div className="bg-gray-200">
      <div className="container">
        <div className="flex flex-row justify-center">
          <div className="col-12 text-center">
            <h1 className="inline-block mt-20 text-center uppercase md:text-6xl text-3xl font-bold border-l-8 pl-7 border-green-500">
              Staff Members
            </h1>
          </div>
        </div>
        <div className="row my-20">
          <TeamCart img="/img/team-1.png" name="Enis Miftari" />
          <TeamCart img="/img/team-1.png" name="Enis Miftari" />
          <TeamCart img="/img/team-1.png" name="Enis Miftari" />
        </div>
      </div>
    </div>
  )
}
