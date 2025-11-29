import {
    createEnquiry as createEnquiryService,
    getEnquiry as getEnquiryService,
    getEnquiryById as getEnquiryByIdService,
    updateEnquiry as updateEnquiryService,
    deleteEnquiry as deleteEnquiryService
} from "./enquiry.service.js";

export const createEnquiry = async (req, res) => {
    try {
        const enquiry = await createEnquiryService(req.body);
        res.status(201).json(enquiry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getEnquiry = async (req, res) => {
    try {
        const enquiries = await getEnquiryService();
        res.status(200).json(enquiries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getEnquiryById = async (req, res) => {
    try {
        const enquiry = await getEnquiryByIdService(req.params.id);
        res.status(200).json(enquiry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateEnquiry = async (req, res) => {
    try {
        const enquiry = await updateEnquiryService(req.params.id, req.body);
        res.status(200).json(enquiry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteEnquiry = async (req, res) => {
    try {
        const enquiry = await deleteEnquiryService(req.params.id);
        res.status(200).json(enquiry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};