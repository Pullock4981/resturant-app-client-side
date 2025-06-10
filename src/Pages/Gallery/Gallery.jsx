
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const images = [
        { src: 'https://i.ibb.co/WvnJ0Vg2/crilled-chicken-bread-piece-greens-pepper-sauce-spices-side-view.jpg' },
        { src: 'https://i.ibb.co/b5yXtX2W/front-view-served-table-with-cocktails.jpg' },
        { src: 'https://i.ibb.co/h14TrW4Y/black-plate-chicken-meat-with-vegetables.jpg' },
        { src: 'https://i.ibb.co/G4Hsjcb7/different-asian-dishes-restaurante.jpg' },
        { src: 'https://i.ibb.co/7NRskWCy/juicy-chicken-burger-with-fresh-lettuce-crispy-french-fries-wooden-board.jpg' },
        { src: 'https://i.ibb.co/mCFg4q2z/top-view-delicious-meat-soup-with-greens-potatoes-dark-desk.jpg' },
        { src: 'https://i.ibb.co/bjNTp2jr/fried-shrimps-served-with-lettuce-sauce.jpg' },
        { src: 'https://i.ibb.co/xS7cLs1T/side-view-chicken-meatballs-with-greens-ketchup-plate.jpg' },
        { src: 'https://i.ibb.co/RLdkV4L/beyti-kebab-served-with-ayran-pickles.jpg' },
        { src: 'https://i.ibb.co/nqY8Jvv7/top-close-up-view-chicken-sauce-lemon-chicken-with-potatoes-seeds-pomegranate-herbs.jpg' },
    ];
    return (
        <div className=" bg-gray-100">
            {/* Title Section */}
            <div className="bg-[#8A4771] text-white py-16 flex justify-center items-center text-center">
                <h1 className="text-4xl md:text-6xl font-bold">Food Gallery</h1>
            </div>

            {/* Gallery Grid */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className="cursor-pointer overflow-hidden rounded-xl shadow hover:scale-105 transition duration-300"
                        onClick={() => {
                            setPhotoIndex(idx);
                            setOpen(true);
                        }}
                    >
                        <img src={img.src} alt={`Food ${idx + 1}`} className="w-full h-48 object-cover" />
                    </div>
                ))}
            </div>

            {/* Lightbox Viewer */}
            {open && (
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    index={photoIndex}
                    slides={images}
                />
            )}
        </div>
    );
};

export default Gallery;