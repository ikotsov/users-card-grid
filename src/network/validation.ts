import { date, InferType, number, object, string } from "yup";

const userSchema = object({
  cell: string().required(),
  dob: object({
    age: number().required(),
    date: string().required(),
  }),
  email: string().email().required(),
  gender: string().required(),
  id: object({
    name: string().required(),
    value: string().required(),
  }),
  location: object({
    city: string().required(),
    coordinates: object({
      latitude: string().required(),
      longitude: string().required(),
    }),
    country: string().required(),
    postCode: number(), // TODO: Cast to string? Sometimes returned as string
    state: string().required(),
    street: object({
      name: string().required(),
      number: number().required(),
    }),
    timezone: object({
      description: string().required(),
      offset: string().required(),
    }),
  }),
  login: object({
    md5: string().required(),
    password: string().required(),
    salt: string().required(),
    sha1: string().required(),
    sha256: string().required(),
    username: string().required(),
    uuid: string().required(),
  }),
  name: object({
    first: string().required(),
    last: string().required(),
    title: string().required(),
  }),
  nat: string().required(),
  phone: string().required(),
  picture: object({
    large: string().required(),
    medium: string().required(),
    thumbnail: string().required(),
  }),
  registered: object({
    age: number().required(),
    date: string().required(),
  }),
});

type UserIO = InferType<typeof userSchema>;
export const isUser = (user: unknown): user is UserIO => {
  try {
    console.log("validation", userSchema.validateSync(user));
    userSchema.validateSync(user);
    console.log(user);
    return true;
  } catch (error) {
    // TODO: Log exception to a tracking service
    console.log(error);
    return false;
  }
};
