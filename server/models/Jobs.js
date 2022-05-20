module.exports = (sequelize, DataTypes) => {
  const Jobs = sequelize.define("Jobs", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    workType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    workStyle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    degree: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jobDesription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  });

  return Jobs;
};