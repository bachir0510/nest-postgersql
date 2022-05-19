import { Controller } from '@nestjs/common';

export function ApiController(prefix?: string | string[]) {
  return (target: any) => {
    const version: [] = Reflect.getMetadata('apiVersion', target);
    if (version) {
      const paths = getPathsWithVersion(prefix, version);
      Controller(paths)(target);
    } else {
      Controller(prefix)(target);
    }
  };
}

const addVersion = (version, path) => {
    return version.map((v) => `${v}/${path}`);
};

const getPathsWithVersion = (prefix: string | string[], version: []) =>{
    const paths: string[] = [];
    if (Array.isArray(prefix)) {
        prefix.forEach((path) => {
            paths.push(...addVersion(version, path));
        })


    }else {
        paths.push(...addVersion(version, prefix))
    }
    return paths;
}