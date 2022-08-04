import React, { useEffect, useState } from 'react';

const Geolocation = () => {
    const [location, setLocation] = useState();
    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition((position: any) =>
            setLocation(position)
        );
    }, []);

    console.log(location);
    return <div>Geolocation</div>;
};

export default Geolocation;
