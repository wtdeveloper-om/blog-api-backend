import prisma from "../../config/dbconnection.js";

export const createEnquiry = async (enquiry) => {
    return await prisma.enquiry.create({
        data: enquiry
    });
}

export const getEnquiry = async () => {
    return await prisma.enquiry.findMany();
}

export const getEnquiryById = async (id) => {
    return await prisma.enquiry.findUnique({
        where: { id }
    });
}

export const updateEnquiry = async (id, enquiry) => {
    return await prisma.enquiry.update({
        where: { id },
        data: enquiry
    });
}

export const deleteEnquiry = async (id) => {
    return await prisma.enquiry.delete({
        where: { id }
    });
}