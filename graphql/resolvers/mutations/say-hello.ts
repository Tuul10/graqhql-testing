export const sayHello = (_: unknown, { name, age }: { name: string, age: number}) => {
  return ` ${name}, ${age}`;
};
