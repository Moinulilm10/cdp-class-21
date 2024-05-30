const Portfolio = require("../model/Portfolio");

exports.createContact = async (ctx) => {
  const { name, email, message } = ctx.request.body;

  if (!name || !email || !message) {
    ctx.status = 400;
    ctx.body = { error: "Missing required fields" };
    return;
  }

  try {
    const newContact = await Portfolio.createContact({ name, email, message });
    console.log("Contact added successfully");
    ctx.status = 201;
    ctx.body = { message: "Contact created successfully", newContact };
  } catch (error) {
    console.error("Failed to add contact:", error);
    ctx.status = 500;
    ctx.body = { error: "Failed to add contact" };
  }
};
