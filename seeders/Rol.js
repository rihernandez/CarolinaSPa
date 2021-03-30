"use strict";

module.exports = {
    up: async(queryInterface, Sequelize) => {
        // Add seed commands here.

        // Example:
        await queryInterface.bulkInsert(
            "Rols", [{
                NombreRol: "Admin",
                DescripcionRol: "Este es el rol de administrador",
            }, ], {}
        );
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};