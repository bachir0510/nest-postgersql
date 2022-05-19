export const ApiVersion = (...versions: string[]) => {
    return Reflect.metadata('apiVersion', versions);
  };