import { Router } from "express";
import { XlToJsonRoutes } from "../modules/xlToJson/xlToJson.routes.js";

const router = Router();

const moduleRoutes = [
  {
    path: "/xltjson",
    route: XlToJsonRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route?.path, route?.route));

export default router;
