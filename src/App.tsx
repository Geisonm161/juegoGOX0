import { useEffect, useState } from 'react';
import './App.css';
import validations from './validations/validations';

interface Props {
  id: number;
  sing: string;
}

function App() {
  const [validatedData, setValidatedData] = useState<number>();
  const [optionSing, setOptionSing] = useState(false);
  const [dataCollection, setDataCollection] = useState<Props[]>([]);

  const onDataCollection = (value: number) => {
    const validateDataExist: boolean = dataCollection.some(
      (item) => item.id === value
    );

    if (
      validateDataExist &&
      dataCollection[dataCollection.length - 1].id === value
    ) {
      setOptionSing(!optionSing);
      setDataCollection(
        dataCollection.filter((item: Props): boolean => item.id !== value)
      );
    }

    if (!validateDataExist) {
      setDataCollection((prev) => [
        ...prev,
        {
          id: value,
          sing: optionSing ? 'X' : 'O',
        },
      ]);
    }
    setOptionSing(!optionSing);
  };

  console.log('marta', validatedData);

  useEffect(() => {
    if (dataCollection.length > 4)
      setValidatedData(validations(dataCollection, optionSing));
  }, [dataCollection, optionSing]);

  return (
    <div className=" flex flex-col items-center justify-center pos h-screen bg-blue-950">
      <h1 className='text-8xl mb-6 font-bold'><label className='text-red-700'>X</label><label className='text-green-700'>0</label></h1>
      <div className='flex items-center justify-center bg-blue-700 border-4 border-blue-700 rounded-2xl shadow-container'>
        <div className='w-[500px] font-bold'>
          <p>A Jugar</p>
          {validatedData === 1 && <div className="container-top-line" />}
          {validatedData === 2 && <div className="container-mediun-line" />}
          {validatedData === 3 && <div className="container-bottom-line" />}
          {validatedData === 5 && <div className="container-vertical-one-line" />}
          {validatedData === 6 && <div className="container-vertical-two-line" />}
          {validatedData === 7 && <div className="container-vertical-three-line" />}
          {validatedData === 4 && <div className="container-diagonal-one-line" />}
          {validatedData === 8 && <div className="container-diagonal-two-line" />}
          <div className="container">
            <div onClick={() => onDataCollection(0)} className="container-internal">
              {dataCollection.some((item) => item.id === 0) ? (
                dataCollection.findIndex((item) => item.id === 0) % 2 === 0 ? (
                  <label className="sing">O</label>
                ) : (
                  <label className="sing-two">X</label>
                )
              ) : (
                ''
              )}
            </div>
            <div onClick={() => onDataCollection(1)} className="container-internal">
              {dataCollection.some((item) => item.id === 1) ? (
                dataCollection.findIndex((item) => item.id === 1) % 2 === 0 ? (
                  <label className="sing">O</label>
                ) : (
                  <label className="sing-two">X</label>
                )
              ) : (
                ''
              )}
            </div>
            <div
              onClick={() => onDataCollection(2)}
              className="container-internal border-hidden"
            >
              {dataCollection.some((item) => item.id === 2) ? (
                dataCollection.findIndex((item) => item.id === 2) % 2 === 0 ? (
                  <label className="sing">O</label>
                ) : (
                  <label className="sing-two">X</label>
                )
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="container">
            <div onClick={() => onDataCollection(3)} className="container-internal">
              {dataCollection.some((item) => item.id === 3) ? (
                dataCollection.findIndex((item) => item.id === 3) % 2 === 0 ? (
                  <label className="sing">O</label>
                ) : (
                  <label className="sing-two">X</label>
                )
              ) : (
                ''
              )}
            </div>
            <div onClick={() => onDataCollection(4)} className="container-internal">
              {dataCollection.some((item) => item.id === 4) ? (
                dataCollection.findIndex((item) => item.id === 4) % 2 === 0 ? (
                  <label className="sing">O</label>
                ) : (
                  <label className="sing-two">X</label>
                )
              ) : (
                ''
              )}
            </div>
            <div
              onClick={() => onDataCollection(5)}
              className="container-internal border-hidden"
            >
              {dataCollection.some((item) => item.id === 5) ? (
                dataCollection.findIndex((item) => item.id === 5) % 2 === 0 ? (
                  <label className="sing">O</label>
                ) : (
                  <label className="sing-two">X</label>
                )
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="container border-hidden">
            <div onClick={() => onDataCollection(6)} className="container-internal">
              {dataCollection.some((item) => item.id === 6) ? (
                dataCollection.findIndex((item) => item.id === 6) % 2 === 0 ? (
                  <label className="sing">O</label>
                ) : (
                  <label className="sing-two">X</label>
                )
              ) : (
                ''
              )}
            </div>
            <div onClick={() => onDataCollection(7)} className="container-internal">
              {dataCollection.some((item) => item.id === 7) ? (
                dataCollection.findIndex((item) => item.id === 7) % 2 === 0 ? (
                  <label className="sing">O</label>
                ) : (
                  <label className="sing-two">X</label>
                )
              ) : (
                ''
              )}
            </div>
            <div
              onClick={() => onDataCollection(8)}
              className="container-internal border-hidden"
            >
              {dataCollection.some((item) => item.id === 8) ? (
                dataCollection.findIndex((item) => item.id === 8) % 2 === 0 ? (
                  <label className="sing">O</label>
                ) : (
                  <label className="sing-two">X</label>
                )
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;