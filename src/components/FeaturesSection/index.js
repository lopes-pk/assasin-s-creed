import React from 'react';
import background from './background.png';
import effectBackground from './efeitoBgFeatures.png';
import timeLine from './timeLine.png';

export default function FeaturesSection() {
  return (
    <main className="flex relative" id="featuresSection">
      <span className="absolute z-10 -top-8 w-full h-24 bg-black blur-xl" />
      <div style={{ backgroundImage: `url(${background})` }} className=" relative h-screen w-[55%] bg-cover">
        <div style={{ backgroundImage: `url(${effectBackground})` }} className="absolute h-screen w-[100%] bg-cover" />
      </div>
      <span className="absolute z-10 top-10 w-full h-24 bg-black blur-3xl" />
      <article className="font-secundary flex flex-col pl-20 pt-20 bg-black h-screen w-[45%]">
        <div className="opacity-70">
          <h3 className="text-white text-lg tracking-wider">Why so special?</h3>
          <h1 className="text-white text-6xl tracking-wider">features</h1>
        </div>
        <div className="relative mt-12 opacity-80">
          <img src={timeLine} alt="estilo time line para features" className="h-56 absolute left-0 z-10" />
          <div className="pl-8">
            <div className="-mt-3">
              <h4 className="text-buttonPurchase text-2xl tracking-wider">SURVIVE AT ALL COSTS</h4>
              <p className="text-white font-primary font-light text-sm">
                You have 30 minutes to find a relic, signal
                <br />
                for extraction, and grab
                one of three spots
                <br />
                on the rescue chopper.
              </p>
            </div>
            <h4 className="text-buttonPurchase text-2xl tracking-wider mt-[2.65rem]">CREATE ALLIES AND ENEMIES</h4>
            <h4 className="text-buttonPurchase text-2xl tracking-wider mt-12">IMPRESS THE AUDIENCE</h4>
          </div>
        </div>
      </article>
    </main>
  );
}
