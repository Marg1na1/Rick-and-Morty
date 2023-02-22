'use client'
import useSWR from 'swr';
import CharacterCard from '@/components/CharacterCard/CharacterCard';
import { CharacterModel, ResponseModel } from '@/models';
import { useState } from 'react';
import style from './characters.module.scss';

const fetcher = (path: string) => fetch(`https://rickandmortyapi.com/${path}`).then(res => res.json())

const Characters = () => {

    const [currentPage, setCurrentPage] = useState(1)

    const characters = useSWR(`api/character/?page=${currentPage}`, fetcher)
    //@ts-ignore 
    const renderCharacters = characters?.data?.results?.map((obj) => <CharacterCard {...obj} key={obj.id} />)

    const next = () => {
        if (currentPage === 42) {
            null
        } else {
            setCurrentPage(prev => prev + 1)
        }
    }

    const prev = () => {
        if (currentPage === 1) {
            null
        } else {
            setCurrentPage(prev => prev - 1)
        }
    }

    return (
        <section >
            <div className="root">
                <h2 className={style['title']}>Characters</h2>
                <p>{
                    //@ts-ignore
                    characters?.info?.next}</p>
                <ul className={style['list']}>
                    {
                        renderCharacters
                    }
                </ul>
                <div className={style['pagination']}>
                    <button onClick={prev}>{'<'}</button>
                    {
                        [...new Array(42)].map((_, i) => (
                            <button key={i} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                        ))
                    }
                    <button onClick={next}>{'>'}</button>
                </div>
            </div>
        </section>
    );
}

export default Characters;