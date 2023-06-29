import TeamCart from '../TeamCart'

export default function TeamSection() {
  return (
    <div className="container">
      <div className="flex flex-row justify-center">
        <div className="col-6">
          <h1 className="mt-20 text-center uppercase text-6xl font-bold border-l-8 border-green-500">
            Staff Memebers
          </h1>
        </div>
      </div>
      <div className="row mt-20">
        <TeamCart img="/img/team-1.png" name="Enis Miftari" />
        <TeamCart img="/img/team-1.png" name="Enis Miftari" />
        <TeamCart img="/img/team-1.png" name="Enis Miftari" />
      </div>
    </div>
  )
}
