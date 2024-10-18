import { defineConfig } from "sanity";
import {structureTool} from "sanity/structure"
import schemas from './sanity/schemas'

export const config = defineConfig({
    projectId: "l52qprww",
    dataset: "production",
    title: "Sanity Studio",
    apiVersion: "2024-10-09",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: schemas}
})