const { Car, Sequelize } = require("./models");
const { Op } = Sequelize;
// bikin file baru
const cron = require("node-cron");

/*
 # ┌────────────── second (optional)
 # │ ┌──────────── minute
 # │ │ ┌────────── hour
 # │ │ │ ┌──────── day of month
 # │ │ │ │ ┌────── month
 # │ │ │ │ │ ┌──── day of week
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *
*/

// dipanggil di app.js
// app.use(sendNotification);

//ini 10 menit artinya
// const sendNotification = cron.schedule("*/10 * * * *", async () => {

//every 2 secodns
const sendNotification = cron.schedule("*/2 * * * * *", async () => {
  try {
    console.log("---------------------");
    console.log("Running Cron Job");

    const status = "z";
    const targetDate = new Date("2023-08-20");
    await Car.update(
      {
        status,
      },
      {
        where: {
          promotionEndDate: {
            [Op.gt]: targetDate,
          },
        },
        returning: true,
      }
    );
    // logic mau ngapain
  } catch (error) {
    console.log(error);
  }
});

module.exports = sendNotification;
