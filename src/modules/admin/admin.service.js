import prisma from "../../config/dbconnection.js";

export const createAdmin = async (admin) => {
    return await prisma.admin.create({
        data: {...admin, password: await bcrypt.hash(admin.password, 10)},
    });
}

export const loginAdmin = async (admin) => {
    return await prisma.admin.findUnique({
        where: { email: admin.email }
    });
}