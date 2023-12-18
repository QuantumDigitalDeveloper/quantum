// components/MyComponent.js
import Image from "next/image";
import React from "react";

const MyComponent = () => {
    return (
        <div>
            <Image alt="turtles" src={item.url} width={300} height={300} />
        </div>
    );
};

export default MyComponent;
