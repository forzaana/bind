import { useEffect, useState } from 'react';

const Counter = ({ counts, ...props }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            if (current <= counts) {
                setValue(current);
                current++;
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [counts]);

    return <span {...props}>{value}</span>;
};

export default Counter;
