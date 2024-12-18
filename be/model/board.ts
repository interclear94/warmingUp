import { DataTypes, Model, Sequelize } from "sequelize";

class Board extends Model {
  public readonly id!: number;
  public title!: string;
  public content!: string;
  public user!: string;
  public pw!: string;
  public view!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;

  public static initialize(sequelize: Sequelize) {
    Board.init(
      {
        title: {
          type: DataTypes.STRING(50),
          allowNull: false,
          validate: { len: [1, 50] },
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: { len: [1, Infinity] },
        },
        user: {
          type: DataTypes.STRING(12),
          allowNull: false,
          validate: { len: [1, 12] },
        },
        pw: {
          type: DataTypes.STRING(128),
          allowNull: false,
          validate: { len: [1, 128] },
        },
        view: {
          type: DataTypes.INTEGER,
        },
      },
      {
        sequelize,
        modelName: "Board",
        tableName: "board",
        timestamps: true,
        underscored: true,
        paranoid: true,
      }
    );
  }
}

export default Board;
