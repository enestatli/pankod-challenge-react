export const fetchData = async () => {
  try {
    const res = await fetch('http://localhost:3000/data.json');
    if (!res.ok) {
      return;
    }
    const data = res.json();

    return data;
  } catch (error) {
    console.log('Error happens while fetching data in fetchData', error);
  }
};

const seperateData = () => {
  //TODO: seperate data by programType movie or series
};
