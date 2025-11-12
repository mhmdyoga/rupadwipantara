"use client";

import Image from "next/image";

const Character = () => {
    return (
        <div className="flex items-center justify-center">
            <Image
                src={"/assets/default_charachter.png"}
                alt=""
                className="w-auto h-auto"
                width={400}
                height={400}
            />
        </div>
    )
}

export default Character