interface Props {
    id: number;
    sing: string;
  }
  
  const validate = (
    data: Props[],
    value1: number,
    value2: number,
    value3: number
  ) => {
    if (
      [value1, value2, value3].every((item) =>
        data.some((item2) => item2.id === item)
      )
    )
      return true;
  };
  
  const validations = (items: Props[], valueSing: boolean) => {
    const sing = valueSing ? 'O' : 'X';
    const filterData = items.filter((item) => item.sing === sing);
    if (validate(filterData, 0, 1, 2)) return 1;
    if (validate(filterData, 3, 4, 5)) return 2;
    if (validate(filterData, 6, 7, 8)) return 3;
    if (validate(filterData, 0, 4, 8)) return 4;
    if (validate(filterData, 0, 3, 6)) return 5;
    if (validate(filterData, 1, 4, 7)) return 6;
    if (validate(filterData, 2, 5, 8)) return 7;
    if (validate(filterData, 2, 4, 6)) return 8;
  };
  
  export default validations;
  