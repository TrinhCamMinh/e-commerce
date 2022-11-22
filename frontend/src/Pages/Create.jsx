import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

export default function Create() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = document.querySelector('#form');
        const postProduct = await fetch(`/api/product`, {
            method: 'POST',
            body: new FormData(form),
        });
        postProduct();
    };
    return (
        <>
            <Announcement />
            <NavBar />
            <form id='form' encType='multipart/form-data' onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='name' />
                <input type='text' name='price' placeholder='price' />
                <input type='text' name='color' placeholder='color' />
                <input type='file' name='image' required />
                <input type='text' name='brand' placeholder='brand' />
                <input type='text' name='tags' placeholder='tags' />
                <input type='text' name='configuration' placeholder='configuration' />
                <input type='text' name='description' placeholder='description' />
                <input type='submit' />
            </form>
            <Footer />
        </>
    );
}
