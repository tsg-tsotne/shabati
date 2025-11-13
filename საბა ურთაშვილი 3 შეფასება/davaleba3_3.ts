interface Data1 {
  name1: string;
  name2: string;
  age: number;
}


interface Data extends Data1 {
  code: number;
  position: string;
  tel: string;
  car: string;
}

const info: Data = {
  name1: "saba",
  name2: "giorgi",
  age: 17,
  code: 555,
  position: "მოსწავლე",
  tel: "555-123456",
  car: "mercedes metris"
};

console.log(info.tel,info.car);
