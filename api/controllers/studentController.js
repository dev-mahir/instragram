import Student from "../models/Student.js";
import bcrypt from "bcryptjs";
import createError from "./errorController.js";

/**
 * @access public
 * @route /api/student
 * @method GET
 */
export const getAllStudents = async (req, res, next) => {
    try {
        const data = await Student.find();
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

/**
 * @access public
 * @route /api/student
 * @method POST
 */
export const createStudent = async (req, res) => {
    const hash_pass = await bcrypt.hash(req.body.password, 10);
    try {
        const data = await Student.create({
            ...req.body,
            password: hash_pass,
        });
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

/**
 * @access public
 * @route /api/student/:id
 * @method POST
 */
export const getSingleStudent = async (req, res, next) => {
    try {
        const data = await Student.findById(req.params.id);
        if (!data) {
            next(createError(404, "Single user not found"));
        }
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

/**
 * @access public
 * @route /api/student
 * @method GET
 */
export const updateStudent = async (req, res) => {
    const hash_pass = await bcrypt.hash(req.body.password, 10);
    try {
        const data = await Student.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
                password: hash_pass,
            },
            {
                new: true,
            }
        );
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

/**
 * @access public
 * @route /api/student
 * @method DELETE
 */
export const deleteStudent = async (req, res) => {
    try {
        const data = await Student.findByIdAndDelete(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};
