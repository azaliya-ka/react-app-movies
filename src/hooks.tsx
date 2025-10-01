import React, { useCallback, useState } from 'react';

export const useToggle = (initialValue = false) : [boolean, () => void] => {
    const [flag, setFlag] = useState<boolean>(initialValue);

    const toggle = useCallback(() => {
        setFlag(flag => !flag);
    }, [flag]);

    return [flag, toggle];
}