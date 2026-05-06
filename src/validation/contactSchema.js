import * as Yup from "yup";

export const contactSchema = Yup.object({
    name: Yup.string()
        .trim()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be less than 50 characters")
        .required("Name is required"),

    email: Yup.string()
        .trim()
        .email("Enter a valid email address")
        .required("Email is required"),

    subject: Yup.string()
        .trim()
        .min(4, "Subject must be at least 4 characters")
        .max(100, "Subject must be less than 100 characters")
        .required("Subject is required"),

    message: Yup.string()
        .trim()
        .min(20, "Message must be at least 20 characters")
        .max(1000, "Message must be less than 1000 characters")
        .required("Message is required"),
});