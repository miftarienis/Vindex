import TeamCart from '../TeamCart'

export default function TeamSection() {
  return (
    <div className="bg-gray-200" id="staffMembers">
      <div className="container">
        <div className="flex flex-row justify-center">
          <div className="col-12 text-center">
            <h1 className="inline-block mt-20 text-center uppercase md:text-6xl text-3xl font-bold border-l-8 pl-7 border-green-500">
              Staff Members
            </h1>
          </div>
        </div>
        <div className="row justify-center my-20">
          <TeamCart
            img="/img/labinot-sylejmani.jpg"
            name="Labinot Sylejmani"
            title="Personal trainer"
          />
          <TeamCart img="/img/kezi-idrizi.jpeg" name="Kezi Idrzi" title="staff" />
        </div>
      </div>
    </div>
  )
}
