'use client';
import React from 'react';
import Image from 'next/image';
import logo1 from '../../public/images/logos/logo1.svg'
import logo2 from '../../public/images/logos/logo2.svg'
import logo3 from '../../public/images/logos/logo3.svg'
import logo4 from '../../public/images/logos/logo4.svg'

const sponsorLogos = [
  {
    name: 'Sponsor 1',
    src: logo1,
    alt: 'Logo Sponsor 1',
  },
  {
    name: 'Sponsor 2',
    src: logo2,
    alt: 'Logo Sponsor 2',
  },
  {
    name: 'Sponsor 3',
    src: logo3,
    alt: 'Logo Sponsor 3',
  },
  {
    name: 'Sponsor 4',
    src: logo4,
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
            <div
              key={logo.name}
              className="relative h-16 w-[150px] grayscale hover:grayscale-0 transition duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={75}
                height={75}
                sizes="(max-width: 768px) 100px, 150px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
