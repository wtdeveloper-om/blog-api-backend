import { createAdmin as createAdminService, loginAdmin as loginAdminService } from "./admin.service.js";

export const createAdmin = async (req, res) => {
    try {
        const admin = await createAdminService(req.body);
        res.status(201).json(admin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const loginAdmin = async (req, res) => {
    try {
        const admin = await loginAdminService(req.body);
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};