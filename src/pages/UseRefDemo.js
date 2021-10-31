import React, { useState, useRef } from 'react';
import Button from '../components/Button';

const UseRef = () => {
    //这里useState绑定个input,关联一个状态name
    const [ name, setname ] = useState('baby张');
    const refvalue = useRef(null);// 先创建一个空的useRef
    function addRef() {
        refvalue.current.value = name;   //点击按钮时候给这个ref赋值
        // refvalue.current = name  //这样写时，即使ref没有绑定在dom上，值依然会存在创建的ref上，并且可以使用它
        console.log(refvalue.current.value);
    }
    return (
        <div>
            <input className='ref-name'
                defaultValue={name}
                onChange={(e) => {
                    setname(e.target.value);
                }}
            />
            <Button onClick={addRef}>给下面插入名字</Button>
            <p>给我个UseRef名字：</p>
            <input className='ref-name' ref={refvalue} />
        </div>
    );
};

export default UseRef;