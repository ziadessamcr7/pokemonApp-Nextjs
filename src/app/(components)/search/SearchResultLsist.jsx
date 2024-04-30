import styles from "./SearchResultLsist.module.css";
import Link from 'next/link';



export const SearchResultsList = ({ results }) => {
    console.log(results);
    return (
        <div className={styles.resultsList}>
            {results?.map((result, idx) => {
                return <Link id={idx} href={`pokemon-types/pokemon-data/${result.url.slice(34, 50)}`}
                    className={`text-decoration-none text-light ${styles.searchResult}`}>
                    {result.name}
                </Link>
            }).slice(0, 10)}
        </div>
    );
};