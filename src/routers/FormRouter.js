import express from "express";
import { insertData, getData, updateData, deleteData } from "../models/FormModel.js";

const router = express.Router();

/* GET*/
router.get("/", async (req, res) => {

    const result = await getData();
    console.log(result);
    res.json({
        message: "Tasks read",
        data: result,
    });
});

/* POST*/
router.post("/", async (req, res) => {
    try {
        const result = await insertData(req.body);
        // console.log(result);
        result?._id
            ? res.json({
                message: "Added the data",
            })
            : res.json({
                message: "Failed to add new data",
            });
    } catch (error) {
        console.log(error);
    }

});

/*update form*/
router.patch("/", async (req, res) => {
    // const updateObj = req.body;
    const result = await updateData(req.body.id, req.body);
    result?.acknowledged
        ? res.json({
            message: "Your task has been updated",
        })
        : res.json({
            message: "Your task could not be updated",
        });
});

/*delete form*/
router.delete("/", async (req, res) => {
    console.log(req.body)
    const { id } = req.body;
    const result = await deleteTask(id);
    result?.acknowledged
        ? res.json({
            message: "Your task has been deleted",
        })
        : res.json({
            message: "Your task could not be deleted",
        });
});

export default router;