import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "board",
  timestamps: true,
  paranoid: true,
  underscored: true,
})
class Board extends Model {
  @Column(DataType.STRING(50))
  title!: string;

  @Column(DataType.TEXT)
  contents!: string;

  @Column(DataType.STRING(12))
  user!: string;

  @Column(DataType.STRING(128))
  pw!: string;

  @Column(DataType.INTEGER)
  view!: number;
}

export default Board;
