const {
  mlbbPackages,
  pubgPackages,
  ffPackages,
  genshinPackages,
} = require("../src/assets/packages");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 1. Fake Users
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Admin User",
          email: "admin@gaming.com",
          password: "hashed_password_123", // In real app, use bcrypt
          role: "admin",
          balance: 1000.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Gamer",
          email: "john@example.com",
          password: "hashed_password_456",
          role: "customer",
          balance: 50.25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: ["id"] },
    );

    // 2. Fake Games
    await queryInterface.bulkInsert(
      "Games",
      [
        {
          name: "Mobile Legends",
          slug: "mobile-legends",
          publisher: "Moonton",
          status: "active",
          imageUrl:
            "https://akmweb.youngjoygame.com/web/gms/image/c6c7a1fff685a10e9cc80829c62199f9.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "PUBG Mobile",
          slug: "pubg-mobile",
          publisher: "Tencent",
          status: "active",
          imageUrl: "https://www.pubgmobile.com/common/images/icon_logo.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Free Fire",
          slug: "free-fire",
          publisher: "Garena",
          status: "active",
          imageUrl:
            "https://i.pinimg.com/736x/c3/57/b9/c357b90e475fde955804248b0db8890a.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Genshin Impact",
          slug: "genshin-impact",
          publisher: "HoYoverse",
          status: "active",
          imageUrl:
            "https://i.pinimg.com/736x/dd/d6/7a/ddd67a00297de983b9c275294f4e66b6.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Honkai: Star Rail",
          slug: "honkai-star-rail",
          publisher: "HoYoverse",
          status: "active",
          imageUrl:
            "https://i.pinimg.com/1200x/33/0d/69/330d69d676feec402104560b5ba3ea69.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Call of Duty: Mobile",
          slug: "cod-mobile",
          publisher: "Activision",
          status: "active",
          imageUrl:
            "https://i.pinimg.com/736x/e8/8f/2d/e88f2d56a2c768eafb0f4c01859e56bc.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Valorant",
          slug: "valorant",
          publisher: "Riot Games",
          status: "active",
          imageUrl:
            "https://i.pinimg.com/736x/c3/f5/66/c3f56646de190d156825cbb204a82ac2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Roblox",
          slug: "roblox",
          publisher: "Roblox Corp",
          status: "active",
          imageUrl:
            "https://i.pinimg.com/736x/eb/20/30/eb203036af2bf931259d9c2ae254b2cd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: ["id"] },
    );

    const packages = [
      ...mlbbPackages,
      ...pubgPackages,
      ...ffPackages,
      ...genshinPackages,
    ];
    // 3. Fake Packages (Linked to Game ID 1 - Mobile Legends)
    const packageData = packages.map((pkg) => ({
      gameId: pkg.gameId,
      title: pkg.title,
      iconUrl: pkg.iconUrl,
      amount: pkg.amount,
      price: pkg.price,
      supplierCode: pkg.supplierCode,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Packages", packageData);
    // 4. Fake Order
    await queryInterface.bulkInsert(
      "Orders",
      [
        {
          userId: 2, // John Gamer
          packageId: 1,
          gameUserId: "12345678",
          serverId: "1234",
          status: "completed",
          paymentMethod: "balance",
          supplierTransactionId: "TXN-99999",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: ["id"] },
    );
  },

  down: async (queryInterface, Sequelize) => {
    // This deletes all data if you want to undo the seed
    await queryInterface.bulkDelete("Orders", null, {});
    await queryInterface.bulkDelete("Packages", null, {});
    await queryInterface.bulkDelete("Games", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  },
};
