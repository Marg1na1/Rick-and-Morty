import Image from "next/image";

const getCharacter = async (id: string) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    return res.json();
}

type CharacterSlug = {
    params: {
        id: string
    }
}

const Character = async ({ params }: CharacterSlug) => {

    const character = await getCharacter(params.id)

    return (
        <>
            <h2>{character.name}</h2>
            <Image
                src={character.image}
                alt='character'
                width={500}
                height={500}
                priority={true}
                quality={100} />
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Type: {character.type}</p>
            <p>Gender: {character.gender}</p>
            <p>origin: {character.origin.name}, location: {character.location.name}</p>
        </>
    )
}
export default Character;