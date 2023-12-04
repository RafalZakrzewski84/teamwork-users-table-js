import axios from 'axios';

export const getData = async url => {
  const response = await axios.get(url);
  return response.data;
};

export const getPlanet = async planetUrl => {
  const planet = await getData(planetUrl);
  const { name, diameter, climate, population } = planet;
  return { name, diameter, climate, population };
};

export const getUserWithPlanet = async user => {
  if (typeof user.homeworld !== 'string') {
    throw new Error('Homeworld must be a string');
  }

  const { name, diameter, climate, population } = await getPlanet(
    user.homeworld,
  );

  return {
    name: user.name,
    height: user.height,
    mass: user.mass,
    created: user.created.toString().slice(0, 10),
    edited: user.edited.toString().slice(0, 10),
    homeworld: name,
    planetData: { diameter, climate, population },
  };
};

export const getUsers = async usersUrl => {
  try {
    const data = await getData(usersUrl);

    const users = await Promise.all(
      data.results.map(async user => getUserWithPlanet(user)),
    );

    const next = data.next;
    const previous = data.previous;

    return { next, previous, users };
  } catch (error) {
    console.log('Error when fetching users data', error);
  }
};

export const getColumnsFromUserData = user =>
  Object.keys(user)
    .filter(key => key !== 'planetData')
    .map(key => {
      if (key === 'homeworld')
        return {
          label: 'Planet Name',
          accessor: key,
        };

      const labelFromKey = key.charAt(0).toUpperCase() + key.slice(1);
      return {
        label: labelFromKey,
        accessor: key,
      };
    });
