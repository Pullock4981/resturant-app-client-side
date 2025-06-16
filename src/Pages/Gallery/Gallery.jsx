
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Gallery = () => {
    const [open, setOpen] = useState(false);
    // const [photoIndex, setPhotoIndex] = useState(0);
    // const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        { src: 'https://i.ibb.co/kgMY8x3Y/Screenshot-2025-06-11-011350.png' },
        { src: 'https://i.ibb.co/V02NFggW/Screenshot-2025-06-11-011334.png' },
        { src: 'https://i.ibb.co/HDVc4p4P/Screenshot-2025-06-11-011317.png' },
        { src: 'https://i.ibb.co/fzCzPtts/Screenshot-2025-06-11-011259.png' },
        { src: 'https://i.ibb.co/S7XWr47Z/Screenshot-2025-06-11-011244.png' },
        { src: 'https://i.ibb.co/G3ctbFLy/Screenshot-2025-06-11-011230.png' },
        { src: 'https://i.ibb.co/wZWMzt7X/Screenshot-2025-06-11-011215.png' },
        { src: 'https://i.ibb.co/KHx4Nqv/Screenshot-2025-06-11-011201.png' },
        { src: 'https://i.ibb.co/mVvsXn7d/Screenshot-2025-06-11-011144.png' },
        { src: 'https://i.ibb.co/W4gvd3xK/Screenshot-2025-06-11-011121.png' },
    ];
    return (
        <div>
            {/* Page Title */}
            <div className="bg-[#8A4771] text-white py-16 flex justify-center items-center text-center">
                <h1 className="md:text-5xl text-3xl font-bold">Food Gallery</h1>
            </div>

            {/* Image Grid */}
            <div className="p-6 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
                {images.map((img, i) => (
                    <div
                        key={i}
                        onClick={() => {
                            setIndex(i);
                            setOpen(true);
                        }}
                        className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:scale-110 transition-transform duration-100"
                    >
                        <img src={img.src} alt={`Food ${i + 1}`} className="w-full h-48 object-cover" />
                    </div>
                ))}
            </div>

            {/* Lightbox with Thumbnails */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={images}
                plugins={[Thumbnails]}
            />
        </div>
    );
};

export default Gallery;