import { FC } from "react";
import Link from "next/link";
import style from './CharacterCard.module.scss';
import { CharacterModel } from "@/models";
import Image from "next/image";



const CharacterCard: FC<CharacterModel> = ({ name, status, species, type, gender, origin, location, image, url, id }) => {
    return (
        <li className={style['root']}>
            <article className={style['card']}>
                <Image alt={name} src={image} width={250} height={250} />
                <Link href={`characters/${id}`}><h1 className={style['title']}>{name}</h1></Link>
            </article>
        </li>
    );
}

export default CharacterCard;