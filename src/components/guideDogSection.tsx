import React from 'react';
import Image from 'next/image'

type dogsType = {
  name: string,
  age: string,
  breed: string,
  description: string,
  image: string
}

const dogs: dogsType[] = [
  {
    name: 'Max',
    age: '4 lata',
    breed: 'Labrador Retriever',
    description: 'Doświadczony pies przewodnik, bardzo opanowany i cierpliwy.',
    image: '/images/dogs/max.jpeg',
  },
  {
    name: 'Luna',
    age: '3 lata',
    breed: 'Golden Retriever',
    description: 'Energiczna i uważna, świetnie sprawdza się w miejskim środowisku.',
    image: '/images/dogs/luna.jpg',
  },
  {
    name: 'Rico',
    age: '5 lat',
    breed: 'Owczarek niemiecki',
    description: 'Spokojny i oddany, idealny dla osoby o spokojnym trybie życia.',
    image: '/images/dogs/rico.png',
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