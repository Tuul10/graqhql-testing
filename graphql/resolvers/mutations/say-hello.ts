import { HelloModel } from "@/mongoose/sayHello";

export const sayHello = (_: unknown, { name, age }: { name: string, age: number}) => {
  const hello = HelloModel.create({name, age})
  return `${name}, ${age}`;
};
