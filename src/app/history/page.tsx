"use client";

import { useAppSelector } from "@/hooks/redux";
import { useWeather } from "@/hooks/useWeather";
import Link from "next/link";

export default function HistoryPage() {
  const { cities } = useAppSelector((state) => state.history);
  const { searchWeather } = useWeather();

  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Historique des recherches
        </h1>
        <div className="flex justify-center mb-4">
          <Link href="/" className="text-blue-500 hover:underline">
            Retour à l&apos;accueil
          </Link>
        </div>
      </header>

      {cities.length === 0 ? (
        <div className="text-center text-gray-500">
          Aucune recherche dans l&apos;historique
        </div>
      ) : (
        <ul className="bg-white rounded-lg shadow-md divide-y">
          {cities.map((city, index) => (
            <li key={index} className="p-4 hover:bg-gray-50">
              <button
                onClick={() => searchWeather(city)}
                className="w-full text-left flex justify-between items-center"
              >
                <span>{city}</span>
                <span className="text-blue-500">→</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
