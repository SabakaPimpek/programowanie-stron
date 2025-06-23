import React from 'react';

const sponsorLogos = [
  {
    name: 'Sponsor 1',
    src: 'images/logos/logo1.svg',
    alt: 'Logo Sponsor 1',
  },
  {
    name: 'Sponsor 2',
    src: 'images/logos/logo2.svg',
    alt: 'Logo Sponsor 2',
  },
  {
    name: 'Sponsor 3',
    src: 'images/logos/logo3.svg',
    alt: 'Logo Sponsor 3',
  },
  {
    name: 'Sponsor 4',
    src: 'images/logos/logo4.svg',
    alt: 'Logo Sponsor 4',
  },
];

const SponsorsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Wspierają nas:
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {sponsorLogos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.alt}
              className="h-16 max-w-[150px] grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;