import emailjs from "emailjs-com";
import toasty from "./utils/toasty.util";
import { TYPE } from "./constants/status.constants";
import { OWNER_EMAILS } from "./constants/common.constants";

/**
 * Sends an email using EmailJS.
 * @param {string} params.userName - Sender's name.
 * @param {string} params.userEmail - Sender's email.
 * @param {string} params.userPhone - Sender's phone number.
 * @param {string} params.userInstructions - Additional instructions from the sender.
 * @param {string} itemTable - HTML string representing a table of items.
 * @param {Array<string>} receiverEmails - List of receiver email addresses.
 */
export const sendEmail = async (params, itemTable = "", type = TYPE.ORDER, receiverEmails = OWNER_EMAILS) => {
    try {
        itemTable = `<table class="email-table">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Other Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Iphone 6</td>
                                <td>3</td>
                                <td>34000</td>
                                <td>1 in gray, 2 in black</td>
                            </tr>
                            <tr>
                                <td>Samsung Galaxy S10</td>
                                <td>2</td>
                                <td>28000</td>
                                <td>Both in white</td>
                            </tr>
                            <tr>
                                <td>MacBook Pro</td>
                                <td>1</td>
                                <td>120000</td>
                                <td>Silver, urgent</td>
                            </tr>
                            <tr>
                                <td>AirPods</td>
                                <td>4</td>
                                <td>18000</td>
                                <td>2 black, 2 white</td>
                            </tr>
                            <tr>
                                <td>iPad Mini</td>
                                <td>2</td>
                                <td>40000</td>
                                <td>1 gray, 1 gold</td>
                            </tr>
                            <tr>
                                <td>Apple Watch</td>
                                <td>5</td>
                                <td>90000</td>
                                <td>2 black, 3 white</td>
                            </tr>
                            <tr>
                                <td>Google Pixel 6</td>
                                <td>3</td>
                                <td>45000</td>
                                <td>All in blue</td>
                            </tr>
                            <tr>
                                <td>Dell XPS 13</td>
                                <td>2</td>
                                <td>95000</td>
                                <td>Silver, 1 for office, 1 for personal</td>
                            </tr>
                            <tr>
                                <td>HP Spectre x360</td>
                                <td>1</td>
                                <td>100000</td>
                                <td>Dark gray, for design work</td>
                            </tr>
                            <tr>
                                <td>OnePlus 9</td>
                                <td>4</td>
                                <td>36000</td>
                                <td>2 black, 2 green</td>
                            </tr>
                            <tr>
                                <td>iMac 24"</td>
                                <td>1</td>
                                <td>150000</td>
                                <td>Blue color, office use</td>
                            </tr>
                            <tr>
                                <td>Kindle Paperwhite</td>
                                <td>3</td>
                                <td>12000</td>
                                <td>2 black, 1 white</td>
                            </tr>
                            <tr>
                                <td>Logitech Mouse</td>
                                <td>6</td>
                                <td>6000</td>
                                <td>3 black, 3 gray</td>
                            </tr>
                            <tr>
                                <td>Mechanical Keyboard</td>
                                <td>2</td>
                                <td>15000</td>
                                <td>Both in white</td>
                            </tr>
                            <tr>
                                <td>External Hard Drive</td>
                                <td>5</td>
                                <td>25000</td>
                                <td>All black</td>
                            </tr>
                        </tbody>
                    </table>`


        if (receiverEmails.length === 0) {
            console.error("No receiver email addresses provided.");
            return;
        }
        
        if (params.userName.trim() === "" || params.userEmail.trim() === "" || params.userPhone.trim() === "") {
            toasty.error("Please fill all required fields.");
            return;
        }

        if (type === TYPE.ORDER && itemTable.trim() === "") {
            toasty.error("Please provide the list of items for the order.");
            return;
        }

        toasty.info("In progress...");

        const templateParams = {
            ...params,
            ...(itemTable && { itemTable: itemTable }),
            subject: type === TYPE.ORDER ? "New Order Received" : "General Inquiry",
            email: receiverEmails.join(", "),
        };

        const result = await emailjs.send(
            "service_sqo7mkq", //& 🔹 Your EmailJS service ID
            "template_udtc3oe", //& 🔹 Your EmailJS template ID
            templateParams,
            "eplxzhMqNRXm0zkhj" //& 🔹 Your EmailJS public key
        );

        toasty.success("Email sent successfully!");
        return { success: true, result, message: "Email sent successfully!" };
    } catch (error) {
        toasty.error("Failed to send email!");
        return {
            success: false,
            error: error.message || "Failed to send email",
            details: error
        };
    }
};
