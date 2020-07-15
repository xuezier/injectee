import { DependencyRegistry } from "../DependencyRegistry";

export function Inject(target: any, key: string, index?: number) {
    DependencyRegistry.registerHandler(target, key, index);
};
