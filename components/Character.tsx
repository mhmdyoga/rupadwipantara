"use client";

const Character = () => {
    return (
        <div className="flex items-center justify-center">
            <video
                src={"/assets/character.mp4"}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-2xl shadow-lg w-[80%] h-auto object-cover"
            />
        </div>
    )
}

export default Character