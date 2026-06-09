import React from "react";

export const Slide = React.memo(function Slide({ data, dataIndex, isCenterSlide, swipeTo, slideIndex }) {
    const coverImage = data[dataIndex]?.image;
    const text = data[dataIndex]?.text;

    return (
        <div className="card-card p-4" draggable={false}>
            <div className={`relative rounded-xl overflow-hidden shadow-lg ${isCenterSlide ? "" : "opacity-70"}`}>
                <img
                    src={coverImage}
                    alt={text}
                    className="w-full h-80 object-cover rounded-lg"
                    onClick={() => !isCenterSlide && swipeTo(slideIndex)}
                />
            </div>
        </div>
    );
});
