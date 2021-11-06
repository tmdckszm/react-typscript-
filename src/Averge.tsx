import React, { useCallback, useMemo, useState, useRef } from 'react';

const getAverage = (numbers: number[]) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a: number, b: number) => a + b);
  return sum / numbers.length;
};

const Averge = () => {
  const [list, setList] = useState<any>([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef<HTMLInputElement | null>(null);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    if (!inputEl.current) return;
    setList([...list, parseInt(number, 10)]);
    setNumber('');
    inputEl.current.focus();
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button type="submit" onClick={onInsert}>
        등록
      </button>
      <ul>
        {list.map((value: string) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </>
  );
};

export default Averge;
