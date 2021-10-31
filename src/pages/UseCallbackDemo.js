import React, {useCallback, useState} from 'react';
import RandomColoredButton from '../components/RandomColoredButton';


const WithoutUseCallbackDemo = () => {

  const [counter, setCounter] = useState(0);
  const [delta, setDelta] = useState(1);

  function handleIncreaseCounter(e) {
    setCounter(counter + delta)
  }

  const handleAddDelta = (e) => {
    setDelta(delta + 1);
  };

  return (
      <div className="text-center">
        <h1>不使用 useCallback</h1>
        <br/>
        <p>Couter: {counter}</p>
        <p>Delta: {delta}</p>
        <RandomColoredButton onClick={handleIncreaseCounter}>修改 Counter</RandomColoredButton>
        <RandomColoredButton onClick={handleAddDelta}>添加 Delta</RandomColoredButton>
        <p className="mt-8">在onclick处理程序之前，上面的按钮不会改变颜色改变</p>
        <p>即使delta保持不变，右按钮每次都会改变颜色</p>
      </div>
  );
};

const UseCallbackDemo = () => {

  const [counter, setCounter] = useState(0);
  const [delta, setDelta] = useState(1);

  function handleIncreaseCounter(e) {
    setCounter(counter + delta)
  }

  const handleAddDelta = useCallback((e) => {
    setDelta(delta + 1);
  }, [delta]);

  return (
      <div className="text-center">
        <h1>useCallback</h1>
        <br/>
        <p>Couter: {counter}</p>
        <p>Delta: {delta}</p>
        <RandomColoredButton onClick={handleIncreaseCounter}>Update Counter</RandomColoredButton>
        <RandomColoredButton onClick={handleAddDelta}>Add Delta</RandomColoredButton>
        <p className="mt-8">在onclick处理程序之前，上面的按钮不会改变颜色改变</p>
        <p>只有当增量改变时，右按钮才会改变颜色</p>
      </div>
  );
};


const Container = () => {

  return <div className="flex">
    <div className="flex-1">
      <WithoutUseCallbackDemo/>
    </div>
    <div className="flex-1">
      <UseCallbackDemo/>
    </div>

  </div>
}

export default Container;

