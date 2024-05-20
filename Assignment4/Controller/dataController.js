const data=require('../ utils/mockData');
const addData = (req, res) => {
    const newData = req.body;
    data.push(newData);
    res.send(data);
};

const getData = (req, res,next) => {
    res.json(data);
  };
  

module.exports = { addData,getData };
