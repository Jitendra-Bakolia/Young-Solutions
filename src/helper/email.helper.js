import emailjs from "emailjs-com";

/**
 * Sends an email using EmailJS.
 * @param {Object} params - email data.
 * @param {string} params.to_name - Receiver name.
 * @param {string} params.from_name - Sender name.
 * @param {string} params.message - Email message.
 * @param {string} params.email - Sender email (optional).
 * @param {string} params.subject - Email subject (optional).
 */
export const sendEmail = async (params = {}) => {
    try {


        params = {
            from_name: "John Doe",
            email: "jitendrabakoliaagami@gmail.com",
            message: "Hello, I'm interested in your services",
            subject: "Contact Form Inquiry"
        }

        console.log("🙈 🙉 🙊 Line 14 ~  :  ", params);
        // Validate required parameters
        if (!params.from_name || !params.message) {
            throw new Error("Missing required parameters: from_name and message are required");
        }

        console.log("� Sending email with params:", params);
        
        const templateParams = {
            to_name: params.to_name || "Support Team",
            from_name: params.from_name,
            from_email: params.email || "",
            reply_to: params.email || "",
            user_email: params.email || "",
            message: params.message,
            user_message: params.message, // Alternative parameter name
            custom_message: params.message, // Another alternative
            subject: params.subject || "Contact Form Message",
            user_name: params.from_name,
            name: params.from_name,
            email: params.email || ""
        };
        console.log(`🙈 🙉 🙊 ~ email.helper.js:29 ~ templateParams : `, templateParams)

        const result = await emailjs.send(
            "service_sqo7mkq", //& 🔹 Your EmailJS service ID
            "template_udtc3oe", //& 🔹 Your EmailJS template ID
            templateParams,
            "eplxzhMqNRXm0zkhj" //& 🔹 Your EmailJS public key
        );
        
        console.log("✅ Email sent successfully:", result.text);
        return { success: true, result, message: "Email sent successfully!" };
    } catch (error) {
        console.error("❌ Failed to send email:", error);
        return { 
            success: false, 
            error: error.message || "Failed to send email",
            details: error 
        };
    }
};

//& Usage examples:
/**
 * Send contact form email
 * @example
 * const contactData = {
 *   from_name: "John Doe",
 *   email: "john@example.com", 
 *   message: "Hello, I'm interested in your services",
 *   subject: "Contact Form Inquiry"
 * };
 * const result = await sendEmail(contactData);
 */

/**
 * Send newsletter subscription email
 * @param {Object} params - subscription data
 * @param {string} params.email - Subscriber email
 * @param {string} params.name - Subscriber name
 */
export const sendNewsletterEmail = async (params = {}) => {
    return await sendEmail({
        from_name: params.name || "Newsletter Subscriber",
        email: params.email,
        message: `Thank you for subscribing to our newsletter! Welcome ${params.name || 'there'}!`,
        subject: "Newsletter Subscription Confirmation",
        to_name: "Newsletter Team"
    });
};

/**
 * Send contact form submission
 * @param {Object} formData - Contact form data
 */
export const sendContactForm = async (formData) => {
    return await sendEmail({
        from_name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: formData.subject || "Website Contact Form",
        to_name: "Support Team"
    });
};
