import React, { useCallback, useEffect, useMemo, useState } from 'react'
export default function Navbar() {
    const [dark, setDark] = useState(false);
    const [num, setNum] = useState(1)

    /** use callback will return the function */
    const getItems = useCallback(() => {
        return [Number(num), Number(num) + 1, Number(num) + 2];
    }, [num]);

    /** use memo will return the function value */
    const getMemo = useMemo(() => {
        return [Number(num), Number(num) + 2, Number(num) + 3]
    }, [num])

    const toggleTheme = () => {
        setDark(!dark)
    }

    const theme = {
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333"
    }

    // console.log(getMemo, "memo")

    return (
        <div className='p-1' style={theme}>
            <button className='btn btn-link' onClick={toggleTheme}>Switch Theme</button>
            <input type='number' value={num} onChange={(event) => setNum(event.target.value)} />
            My App - {num} - <Item callbackList={getItems()} memoList={getMemo} />
        </div>
    )
}

const Item = ({ callbackList, memoList }) => {
    useEffect(() => {
        console.log("Loaded ....")
    }, [callbackList])
    return <div>
        Callback {callbackList.map((item) => <span className='border mx-3 px-3 py-1' key={item.toString()}>{item}</span>)} <hr />
        Memo {memoList.map((item) => <span className='border mx-3 px-3 py-1' key={item.toString()}>{item}</span>)} <br />
    </div>
}
