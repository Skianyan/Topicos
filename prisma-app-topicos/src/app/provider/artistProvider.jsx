"use client";
import { createContext, useContext, useState } from "react";

//crear contexto
const artistContext = createContext();

export function useArtistContext() {
	return useContext(artistContext);
}

export function ArtistContextProvider({ children }) {
	const [artist, setArtist] = useState(null);

	return (
		<artistContext.Provider value={{ artist, setArtist }}>
			{children}
		</artistContext.Provider>
	);
}
