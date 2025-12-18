import { Router } from "express";
import { getRepoAtlas } from "../controller/repo.js";


const repo_router = Router();

repo_router.get('/repo-atlas', getRepoAtlas);

export { repo_router };