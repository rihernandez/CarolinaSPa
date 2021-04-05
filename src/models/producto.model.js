module.exports = (sequelize, Sequelize) => {
    const Productos = sequelize.define(
        "Productos", {
            id_Producto: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            id_proveedor: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    type: Sequelize.INT,
                    model: "Proveedor",
                    key: "id_Proveedor",
                },
            },
            id_categoria: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    type: Sequelize.INT,
                    model: "Categorias",
                    key: "id_Categoria",
                },
            },
            // id_inventario: {
            //     type: Sequelize.INTEGER,
            //     allowNull: false,
            //     references:{
            //         type: Sequelize.INT,
            //         model: 'Inventario',
            //         key: 'id_Inventario'
            //     }
            // },
            nombreProducto: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            precio: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            descripcion: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            existencia: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            existenciaMax: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            existenciaMin: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            ultimaVenta: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("NOW"),
            },
            ultimaEntrada: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("NOW"),
                allowNull: false,
            },
            estado: {
                type: Sequelize.CHAR,
                defaultValue: "1",
            },
        }, {
            timestamps: false,
        }
    );

    return Productos;
};