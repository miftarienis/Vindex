import PricingCart from '../PricingCart'

export default function PricingSection() {
  return (
    <div className="bg-gray-200" id="pricing">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="inline-block mt-10 text-center uppercase text-6xl font-bold border-l-8 pl-7 border-green-500">
              Pricing
            </h1>
          </div>
        </div>
        <div className="bg-white mt-20 p-10 rounded-2xl">
          <div className="row">
            <PricingCart
              pricing="1500"
              time="month"
              desc="Men"
              duration="For One Month"
              array={['All equipments', 'Chat with trainers']}
              gpricing="1200"
              gtime="month"
              gdesc="Women"
              gduration="For One Month"
              garray={['All equipments', 'Chat with trainers']}
            />
            <PricingCart
              pricing="4000"
              time="months"
              desc="Men"
              duration="For Three Months"
              array={['All equipments', 'Chat with trainers']}
              gpricing="3100"
              gtime="months"
              gdesc="Women"
              gduration="For Three Months"
              garray={['All equipments', 'Chat with trainers']}
            />
            <PricingCart
              pricing="7500"
              time="months"
              desc="Men"
              duration="For Six Months"
              array={['All equipments', 'Chat with trainers']}
              gpricing="5700"
              gtime="months"
              gdesc="Women"
              gduration="For Six Months"
              garray={['All equipments', 'Chat with trainers']}
            />
            <PricingCart
              pricing="3000"
              time="month"
              desc="Diet Plan"
              duration="For One Month"
              array={['Diet Planning & Training', 'Chat with trainers']}
              gpricing="3000"
              gtime="month"
              gdesc="Diet Plan"
              gduration="For One Month"
              garray={['Diet Planning & Training', 'Chat with trainers']}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
