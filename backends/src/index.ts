import * as express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import RouteBarang from "./routes/RouteBarang";
import RouterTransaksiDetail from "./routes/RouteTransaksiDetail";
import cors = require("cors");
import RouterTransaksiHeader from "./routes/RouteTransaksiHeader";

AppDataSource.initialize()
  .then(() => {
    const app = express();
    const port = 5000;

    app.use(cors());
    app.use(express.json());

    app.use("/api", RouteBarang);
    app.use("/api", RouterTransaksiDetail);
    app.use("/api", RouterTransaksiHeader);

    app.get("/", (req: Request, res: Response) => {
      res.send("hello world");
    });

    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
