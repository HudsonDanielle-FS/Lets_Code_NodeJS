const express = require("express");
const router = express.Router();

// http://localhost:3000/exercise
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Successful - GET",
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

//http://localhost:3000/exercise/34
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: "Successful - GET by ID",
    id: id,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

//http://localhost:3000/exercise/89
router.patch("/:id", (req,res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: "Successful - PATCH by ID",
    id: id,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

//http://localhost:3000/exercise/9
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: "Successful - DELETE by ID",
    id: id,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

//http://localhost:3000/exercise
router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Successful - POST",
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

module.exports = router;
