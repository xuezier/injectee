import { DependencyRegistry } from "../DependencyRegistry";
import { Klass } from "../../core";

export function Vendor(klass: Klass) {
    DependencyRegistry.registerComponentPropertyHandler(klass);
}