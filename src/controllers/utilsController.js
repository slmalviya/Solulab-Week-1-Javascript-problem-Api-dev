const { deepClone } = require("../services/deepCloneService");
const { flattenArray } = require("../services/flattenArrayService");
const { rotateMatrix } = require("../services/rotateMatrixService");
const { throttle } = require("../services/throttle");
exports.cloneObject = (req, res) => {
  try {
    const inputObject = req.body; // Get the input object from the request body

    // Check if inputObject is an object or an array
    if (typeof inputObject !== "object" || inputObject === null) {
      return res
        .status(400)
        .json({ error: "Invalid input: must be an object or array" });
    }

    const clonedObject = deepClone(inputObject); // Deep clone the input object
    res.json(clonedObject); // Return the cloned object in the response
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.flattenArray = (req, res) => {
  try {
    const inputArray = req.body; // Get the input array from the request body

    // Check if inputArray is an array
    if (!Array.isArray(inputArray)) {
      return res.status(400).json({ error: "Invalid input: must be an array" });
    }

    const flattenedArray = flattenArray(inputArray); // Flatten the input array
    res.json(flattenedArray); // Return the flattened array in the response
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.rotateMatrix = (req, res) => {
  const matrix = req.body; // Get the matrix from the request body

  if (!Array.isArray(matrix) || !matrix.every(Array.isArray)) {
    return res.status(400).json({ error: "Invalid input: must be a 2D array" });
  }

  const n = matrix.length;
  if (!matrix.every((row) => row.length === n)) {
    return res
      .status(400)
      .json({ error: "Invalid input: must be a square matrix" });
  }

  const rotatedMatrix = rotateMatrix(matrix); // Rotate the matrix
  res.json(rotatedMatrix); // Return the rotated matrix in the response
};

exports.throttle = (req, res) => {
  const { message } = req.query;
  if (!message) {
    return res
      .status(400)
      .json({ error: "Message query parameter is required" });
  }

  throttledLogMessage(message);
  res.status(200).json({ message: "Function called (if not throttled)" });
};
