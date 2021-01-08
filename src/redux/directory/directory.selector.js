import { createSelector } from "reselect";

const selectorDirectory = state => state.directory;

export const selectDirectory = createSelector(
    [selectorDirectory],
    directory => directory.sections
)