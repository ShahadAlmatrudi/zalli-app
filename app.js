const state = {
  room: "dorm",
  sun: 85,
  outside: 43,
  windowArea: 6,
  hours: 9,
};

const roomProfiles = {
  dorm: {
    label: "Dorm room",
    bestPlace: "Dorm windows",
    baseTemp: 25,
    acLoad: 1.25,
    filmEffect: 0.42,
  },
  car: {
    label: "Parked car",
    bestPlace: "Car glass",
    baseTemp: 30,
    acLoad: 0.82,
    filmEffect: 0.48,
  },
  home: {
    label: "Home room",
    bestPlace: "Living room",
    baseTemp: 24,
    acLoad: 1.8,
    filmEffect: 0.38,
  },
};
