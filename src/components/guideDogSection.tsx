import React from 'react';
import Image, { StaticImageData } from 'next/image'
import MaxImage from '../../public/images/dogs/max.jpeg';
import LunaImage from '../../public/images/dogs/luna.jpeg';
import RicoImage from '../../public/images/dogs/rico.jpeg';

type dogsType = {
  name: string,
  age: string,
  breed: string,
  description: string,
  image: StaticImageData
}

const dogs: dogsType[] = [
  {
    name: 'Max',
    age: '4 lata',
    breed: 'Labrador Retriever',
    description: 'Doświadczony pies przewodnik, bardzo opanowany i cierpliwy.',
    image: MaxImage,
  },
  {
    name: 'Luna',
    age: '3 lata',
    breed: 'Golden Retriever',
    description: 'Energiczna i uważna, świetnie sprawdza się w miejskim środowisku.',
    image: LunaImage,
  },
  {
    name: 'Rico',
    age: '5 lat',
    breed: 'Owczarek niemiecki',
    description: 'Spokojny i oddany, idealny dla osoby o spokojnym trybie życia.',
    image: RicoImage,
  },
];

const GuideDogsSection = () => {
  return (
    <section className="bg-gray-50 py-16" id='dogSSSection'>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Poznaj naszych psów przewodników
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dogs.map((dog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg"
            >
              <div className="relative w-full h-64">
                <Image
                  src={dog.image}
                  alt={`Pies przewodnik ${dog.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{dog.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {dog.breed}, {dog.age}
                </p>
                <p className="text-gray-700 text-sm">{dog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideDogsSection;