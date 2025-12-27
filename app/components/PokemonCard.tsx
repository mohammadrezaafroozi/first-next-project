import { TPokemon } from "@/public/utils/types";
import Image from "next/image";

export default function PokemonCard({ name, imageUrl, id, types }: TPokemon) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <div className="p-4">
        <div className="relative aspect-square mb-4">
          <Image src={imageUrl} alt={name} width={250} height={250} className="w-full h-full object-contain" />
        </div>
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-1">
            #{id}
            </p>

          <h2 className="font-bold text-xl capitalize mb-3">{name}</h2>
          <div>
             {types.map((type,idx)=>(
            <span key={idx} className="bg-green-500 px-3 mx-2 py-1 rounded-full text-sm">{type}</span>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
