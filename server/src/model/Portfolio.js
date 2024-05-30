const { dynamodbClient } = require("../config/aws");

const TABLE_NAME = "portfolio";

const Portfolio = {
  async createContact({ name, email, message }) {
    const id = Date.now().toString();
    const params = {
      TableName: TABLE_NAME,
      Item: {
        id,
        name,
        email,
        message,
      },
    };
    try {
      await dynamodbClient.put(params).promise();
      return { id, name, email, message };
    } catch (error) {
      console.error("Failed to add contact:", error);
      throw new Error("Error adding contact");
    }
  },
};

module.exports = Portfolio;
