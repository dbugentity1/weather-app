export const dayNameOptions = [
    { value: "monday", label: "Every Monday" },
    { value: "tuesday", label: "Every Tuesday" },
    { value: "wednesday", label: "Every Wednesday" },
    { value: "thursday", label: "Every Thursday" },
    { value: "friday", label: "Every Friday" },
    { value: "saturday", label: "Every Saturday" },
    { value: "sunday", label: "Every Sunday" },
  ];
  
  export const daytimeOptions = [
    { value: "morning", label: "Morning" },
    { value: "afternoon", label: "Afternoon" },
    { value: "evening", label: "Evening" },
  ];
  

  export const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      '&:hover': {
        border: 'none',
      },
    }),
    container: (provided) => ({
      ...provided,
      width: '100%',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'black',
    }),
    input: (provided) => ({
      ...provided,
      color: 'black',
      // width: '200px',

    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
  };