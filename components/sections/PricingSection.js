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
              pricing="20"
              time="month"
              desc="Intro"
              duration="For One Month"
              array={['All equipments', 'Chat with trainers', 'Optimize hashtags']}
            />
            <PricingCart
              pricing="50"
              time="month"
              desc="Base"
              duration="For Three Months"
              array={['All equipments', 'Chat with trainers', 'Optimize hashtags']}
            />
            <PricingCart
              isGreen
              pricing="100"
              time="month"
              desc="Pro"
              duration="For Six Months"
              array={['All equipments', 'Chat with trainers', 'Optimize hashtags']}
            />
            <PricingCart
              pricing="200"
              time="year"
              desc="Enterprise"
              duration="For One Year"
              array={['All equipments', 'Chat with trainers', 'Optimize hashtags']}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
