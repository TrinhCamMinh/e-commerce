import { useRef } from 'react';
import { useGetProducts } from '../hooks/useGetProducts';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

export default function Create() {
    const { postProduct } = useGetProducts();
    const tagRef = useRef();
    const ScreenRef = useRef();
    const OSRef = useRef();
    const BackCameraRef = useRef();
    const FrontCameraRef = useRef();
    const ChipRef = useRef();
    const RamRef = useRef();
    const SimRef = useRef();
    const BatteryRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = document.querySelector('#form');
        const formData = new FormData(form);

        await postProduct(formData);
    };
    return (
        <>
            <Announcement />
            <NavBar />
            <form id='form' encType='multipart/form-data' onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='name' />
                <input type='text' name='price' placeholder='price' />
                <input type='text' name='color' placeholder='color' />
                <input type='file' name='image' required/>
                <input type='text' name='brand' placeholder='brand' />
                <input type='text' name='tag' placeholder='tag' ref={tagRef} />
                <input type='text' name='screen' placeholder='screen' ref={ScreenRef} />
                <input type='text' name='OS' placeholder='OS' ref={OSRef} />
                <input type='text' name='BackCamera' placeholder='BackCamera' ref={BackCameraRef} />
                <input type='text' name='FrontCamera' placeholder='FrontCamera' ref={FrontCameraRef} />
                <input type='text' name='Chip' placeholder='Chip' ref={ChipRef} />
                <input type='text' name='Ram' placeholder='Ram' ref={RamRef} />
                <input type='text' name='Sim' placeholder='Sim' ref={SimRef} />
                <input type='text' name='Battery' placeholder='Battery' ref={BatteryRef} />
                <input type='text' name='description' placeholder='description' />
                <input type='submit' />
            </form>
            <Footer />
        </>
    );
}
