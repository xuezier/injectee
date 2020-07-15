import { Klass } from "../../core";
import { DependencyRegistry } from "../DependencyRegistry";

export function Component(klass: Klass) {
    DependencyRegistry.registerComponent(klass);
};
