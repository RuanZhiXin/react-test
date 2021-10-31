import React, { useState, useMemo } from 'react';

const Child = ({ age, name, children }) => {
    //在不用useMemo做处理的时候，只要父组件状态改变了，子组件都会渲染一次，用了useMemo可以监听某个状态name，当name变化时候执行useMemo里第一个函数
    console.log(age, name, children, '11111111');
    function namechange() {
        console.log(age, name, children, '22222222');
        return name + 'change';
    }
    //useMemo有两个参数，和useEffect一样，第一个参数是函数，第二个参数是个数组，用来监听某个状态不变化
    const changedname = useMemo(() => namechange(), [ name, age ]);
    return (
        <div style={{ border: '1px solid' }}>
            <p>children：{children}</p>
            <p>name：{name}</p>
            <p>changed：{changedname}</p>
            <p>age：{age}</p>
        </div>
    );
};

const UseMemo = () => {
    //useState 设置名字和年龄，并用2两个按钮改变他们，传给Child组件
    const [ name, setname ] = useState('baby张'); 
    const [ age, setage ] = useState(18);
    return (
        <div>
            <button
                onClick={() => {
                    setname('baby张' + new Date().getTime()); 
                }}
            >
                改名字
            </button>
            <button
                onClick={() => {
                    setage('年龄' + new Date().getTime());
                }}
            >
                改年龄
            </button>
            <p>
                UseMemo {name}：{age}
            </p>
            <Child age={age} name={name}>
                {name}的children
            </Child>
        </div>
    );
};

export default UseMemo;