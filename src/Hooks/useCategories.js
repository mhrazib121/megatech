import React, { useEffect, useState } from 'react';

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    // const [controlledSwiper, setControlledSwiper] = useState(null);
    useEffect(() => {
        fetch('./categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default useCategories;