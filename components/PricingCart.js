import SVG from 'react-inlinesvg'
export default function PricingCart({
  isGreen,
  pricing,
  time,
  desc,
  duration,
  array,
  gpricing,
  gtime,
  gdesc,
  gduration,
  garray,
}) {
  return isGreen ? (
    <div className="lg:col-3 md:col-6 bg-green-500 rounded-2xl p-10 lg:-mt-20 mt-0">
      <p className="text-end font-bold uppercase">Most popular</p>
      <h2 className="mt-2 text-3xl font-semibold">
        {pricing} MKD <span className="ml-2 text-base font-normal">/{time}</span>
      </h2>
      <h3 className="mt-5 text-2xl font-extrabold">{desc}</h3>
      <p className="mt-2 font-bold">{duration}</p>
      <ul className="mt-5 space-y-3">
        {array.map((arr) => (
          <li key={arr} className="flex items-center">
            <SVG src="/svg/tick-black.svg" className="w-4 h-4 fill-current" />
            <span className="ml-3">{arr}</span>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    // <div className="lg:col-3 md:col-6 p-8">
    //   <h2 className="text-3xl font-semibold">
    //     {pricing} Den <span className="ml-2 text-base font-normal">/months</span>
    //   </h2>
    //   <h3 className="mt-5 text-2xl font-extrabold">{desc}</h3>
    //   <p className="mt-2 font-bold">{duration}</p>
    //   <ul className="mt-5 space-y-3">
    //     {array.map((arr) => (
    //       <li key={arr} className="flex items-center">
    //         <SVG src="/svg/tick-green.svg" className="w-4 h-4 fill-current" />
    //         <span className="ml-3">{arr}</span>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div className="lg:col-3 md:col-6 g-0">
      <div className="relative h-80 p-5 group">
        <h2 className="text-3xl font-semibold">
          {pricing} Den <span className="ml-2 text-base font-normal">/ {time}</span>
        </h2>
        <h3 className="mt-5 text-2xl font-extrabold">{desc}</h3>
        <p className="mt-2 font-bold">{duration}</p>
        <ul className="mt-5 space-y-3">
          {array.map((arr) => (
            <li key={arr} className="flex items-center">
              <SVG src="/svg/tick-green.svg" className="w-4 h-4 fill-current" />
              <span className="ml-3">{arr}</span>
            </li>
          ))}
        </ul>
        <div className="absolute inset-0 transition-all duration-500 ease-in-out p-5 rounded-2xl bg-green-500 opacity-0 group-hover:opacity-100">
          <h2 className="text-3xl text-white font-semibold">
            {gpricing} Den <span className="ml-2 text-base font-normal">/{gtime}</span>
          </h2>
          <h3 className="mt-5 text-2xl text-white font-extrabold">{gdesc}</h3>
          <p className="mt-2 text-white font-bold">{gduration}</p>
          <ul className="mt-5 space-y-3">
            {garray.map((arr) => (
              <li key={arr} className="flex items-center">
                <SVG src="/svg/tick-green.svg" className="w-4 h-4 fill-current" />
                <span className="ml-3 text-white">{arr}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
