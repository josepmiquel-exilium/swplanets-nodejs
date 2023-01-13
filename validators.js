export const inputIsNumber = (input) => {
    if (isNaN(input) || input < 1) throw 'The input must be a number higher than 0';
};

export const filmsIdIsValid = (input, data) => {
    const { count } = data;

    if (input > count) throw "The film that you've introduced doesn't exist";
};
