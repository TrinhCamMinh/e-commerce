import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import ProductItem from '../Components/ProductItem';
import Announcement from '../Components/Announcement';
import { useHistory } from '../hooks/useHistory';

export default function History() {
    const { getHistory } = useHistory();
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getHistory(id);
            setItem(data);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Announcement />
            <NavBar />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {item &&
                    item.map((currentItem, index) => {
                        return <ProductItem key={index} item={currentItem} />;
                    })}
            </div>
            <Footer />
        </>
    );
}
