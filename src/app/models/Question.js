import { Model, DataTypes } from 'sequelize';

class Question extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        subject: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Answer, {
      foreignKey: 'question_id',
      as: 'answers',
    });
  }
}

export default Question;
